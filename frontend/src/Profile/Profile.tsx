import React from "react";
import "./Profile.css";
import { Translations } from "../i18n";
import picture from "../assets/img/my_profile.jpg";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

interface IProps {
  t: Translations;
  owner: string;
}

export const Profile = ({ t, owner }: IProps) => {
  return (
    <div className="page">
      <div className="title-banner center-items">
        <h1>{t.welcome}</h1>
      </div>
      <Grid2 container spacing={4} className="profile center-items" margin={0}>
        <Grid2 xs={12} sm={10} md={6} lg={4} className="profile-desc-height">
          <Grid2>
            <h3>{t.profile.fields}</h3>
          </Grid2>
          <Grid2 className="profile-skills">{t.profile.website}</Grid2>
          <Grid2 className="profile-skills">{t.profile.fullStack}</Grid2>
          <Grid2 className="profile-skills">{t.profile.database}</Grid2>
          <Grid2 className="profile-skills">{t.profile.teaching}</Grid2>
          <Grid2 className="profile-skills">{t.profile.graphics}</Grid2>
        </Grid2>
        <Grid2 xs={12} sm={10} md={6} lg={4} className="profile-desc-height">
          <Grid2 paddingBottom={0}>
            <h3>{t.profile.about}</h3>
          </Grid2>
          <Grid2 paddingTop={0.5} className="profile-desc">
            <p>{t.profile.intro}</p>
            <p>{t.profile.passions}</p>
            <p>{t.profile.values}</p>
          </Grid2>
        </Grid2>
        <Grid2 xs={12} sm={10} md={8} lg={4} className="center-items">
          <img src={picture} className="picture" alt={t.alt.picture} />
        </Grid2>
      </Grid2>
    </div>
  );
};
