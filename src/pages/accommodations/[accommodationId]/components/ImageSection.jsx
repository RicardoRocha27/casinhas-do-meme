import { Grid } from "@mui/material";
import React, { useState } from "react";

const ImageSection = ({ specificAcc }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(
    `${specificAcc.link}_1.jpg`
  );
  const [notSelected, setNotSelected] = useState([
    `${specificAcc.link}_2.jpg`,
    `${specificAcc.link}_3.jpg`,
    `${specificAcc.link}_4.jpg`,
    `${specificAcc.link}_5.jpg`,
  ]);

  return (
    <Grid container spacing={4} mb={10}>
      <Grid item xs={12} md={6} display="flex" justifyContent="center">
        <img
          src={require(`assets/images/${selectedPhoto}`)}
          style={{ maxWidth: "100%", height: "100%" }}
          alt="acc1"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container spacing={4}>
          {notSelected.map((photo, index) => (
            <Grid item xs={6} key={index} display="flex">
              <img
                src={require(`assets/images/${photo}`)}
                style={{
                  maxWidth: "100%",
                  height: "100%",
                  cursor: "pointer",
                }}
                alt="acc1"
                onClick={() => {
                  const save = selectedPhoto;
                  setSelectedPhoto(photo);
                  setNotSelected((prevPhotos) => {
                    const updatedPhotos = [...prevPhotos];
                    updatedPhotos.splice(index, 1, save);
                    return updatedPhotos;
                  });
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ImageSection;
