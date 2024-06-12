import { contentTypes, movieProps, seriesProps } from "@/types/content-types";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Heading } from "./ui/heading";
import { Calendar, Star } from "lucide-react";
import { IMAGE_URL } from "@/lib/constants";
import { Link } from "react-router-dom";
import { ratedColor } from "@/lib/rated-color";
import { Button } from "./ui/button";
import { useState } from "react";
import { createPortal } from "react-dom";
import { RateModal } from "./rate-modal";

export function ContentCard({
  c,
  contentType,
}: {
  c: movieProps | seriesProps;
  contentType: contentTypes;
}) {
  const [showModal, setShowModal] = useState(false);
  const modal =
    typeof window !== "undefined" &&
    createPortal(
      <RateModal
        c={c}
        contentType={contentType}
        setShowModal={setShowModal}
        showModal={showModal}
      />,
      document.body
    );

  function handleModal(getCurrentId: number) {
    if (getCurrentId === c.id) {
      setShowModal(!showModal);
    }
  }

  const isLogIn = Boolean(localStorage.getItem("guestSessionId"));

  return (
    <>
      <Card>
        <CardHeader>
          <Link to={`/${contentType}/${c.id}`}>
            <img
              src={`${IMAGE_URL}${c.poster_path}`}
              alt={
                contentType === "movie"
                  ? (c as movieProps).title
                  : (c as seriesProps).name
              }
            />
          </Link>
          <Heading>
            {contentType === "movie"
              ? (c as movieProps).title
              : (c as seriesProps).name}
          </Heading>
        </CardHeader>
        <CardContent>
          <p className="flex items-center gap-1">
            <Calendar />{" "}
            {contentType === "movie"
              ? (c as movieProps).release_date
              : (c as seriesProps).first_air_date}
          </p>
          {/* rate modal */}
          {isLogIn && (
            <Button onClick={() => handleModal(c.id)} variant="ghost">
              <Star />
            </Button>
          )}
          <p
            className="flex items-center gap-2 font-bold"
            style={{
              color: ratedColor(Number(c.vote_average.toFixed(2))),
            }}
          >
            <Star color="#facc15" /> {c.vote_average.toFixed(2)}
          </p>
        </CardContent>
      </Card>
      {isLogIn && showModal && modal}
    </>
  );
}
