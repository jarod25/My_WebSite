import React, { useState } from "react";
import { Translations } from "../i18n";
import "./Contact.css";
import Grid2 from "@mui/material/Unstable_Grid2";
import ImgContact from "../assets/img/contact-mail.svg";
import { IconButton, Snackbar, Alert } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import CopyAllIcon from "@mui/icons-material/CopyAll";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
// import WorkIcon from "@mui/icons-material/Work";
// import WorkOffIcon from "@mui/icons-material/WorkOff";

interface IProps {
  t: Translations;
  availability: boolean;
}

export const Contact = ({ t, availability }: IProps) => {
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [snackResult, setSnackResult] = useState({AlertColor: "success", message:""})!;

 
  const handleClick = (data: string) => {
    copyText(data);
    setOpenSnackBar(true);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackBar(false);
  };

  // const availableForWork = () => {
  //   if (availability)
  //     return (
  //       <p>
  //         <WorkIcon sx={{ fontSize: "1.2rem", margin: "0 1rem -.2rem" }} />
  //         {t.contact.available}
  //       </p>
  //     );
  //   else
  //     return (
  //       <p>
  //         <WorkOffIcon sx={{ fontSize: "1.2rem", margin: "0 1rem -.2rem" }} />
  //         {t.contact.notAvailable}
  //       </p>
  //     );
  // };

  const copyText = async (data: string) => {
    try {
      await navigator.clipboard.writeText(data);
      if (data === t.contact.phone) {
        setSnackResult({AlertColor: "success", message: t.contact.copyPhone});
      }
      else {
        setSnackResult({AlertColor: "success", message: t.contact.copyMail});
      }
      
    }
    catch (e) {
      setSnackResult({AlertColor: "error", message: t.contact.errorCopy});
    }
  };

  
  const dlDocument = async () => {
    const url = `${process.env.PUBLIC_URL}/cv.pdf`;
    fetch(url)
        .then(response => response.blob())
        .then(blob => {
          const url = window.URL.createObjectURL(new Blob([blob]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'CV Jarod KOHLER.pdf'); // Nom du fichier téléchargé
          document.body.appendChild(link);
          link.click();
          // Vérifiez que le parent existe avant de le supprimer
          if (link.parentNode) {
            link.parentNode.removeChild(link);
          }
          // Révoquer l'URL de l'objet après l'utilisation pour libérer la mémoire
          window.URL.revokeObjectURL(url);
        })
        .catch(error => console.error('Erreur lors du téléchargement du fichier:', error));
  };

  return (
    <div className="page contact" id="contact">
      <div className="title-banner center-items">
        <h1>{t.contact.title}</h1>
      </div>
      <Grid2
        container
        spacing={0}
        margin={0}
        className="contact-infos center-items"
      >
        <Grid2 xs={12} sm={10} md={8} lg={6}>
          <div className="center-items">
            <img src={ImgContact} alt={t.alt.contact} className="image-contact"/>
          </div>
        </Grid2>
        <Grid2 className="contact-font" xs={12} sm={10} md={8} lg={6}>
          {/* {availableForWork()} */}
          <p>
            <MailIcon sx={{ fontSize: "1.2rem", margin: "0 1rem -.2rem" }} />
            {t.contact.writeMe}
            <span>
              <a href={"mailto:"+ t.contact.mail + t.contact.domainName} className="mail-and-phone">
              {t.contact.mail}
              {t.contact.domainName}
              </a>
            </span>
            <CopyAllIcon sx={{ fontSize: "1.2rem", margin: "0 0.5rem -.2rem", cursor: "pointer" }}
            onClick={() => handleClick(t.contact.mail+t.contact.domainName)}/>
          </p>
          <p>
            <PhoneIcon sx={{ fontSize: "1.2rem", margin: "0 1rem -.2rem" }} />
            {t.contact.callMe}
            <span>
              <a href={"tel:"+ t.contact.phone} className="mail-and-phone">
                {t.contact.phone}
              </a>
            </span>
            <CopyAllIcon sx={{ fontSize: "1.2rem", margin: "0 0.5rem -.2rem", cursor: "pointer"}} 
            onClick={() => handleClick(t.contact.phone)}/>
          </p>
          <p>
            <FileDownloadIcon sx={{ fontSize: "1.2rem", margin: "0 1rem -.2rem" }} />
            {t.contact.downloadResume}
            <span>
              <button onClick={dlDocument} className="mail-and-phone" style={{margin:"-1vh 0", padding: "1.2%", border:"none"}}>
              {t.contact.resume}
              </button>
            </span>
          </p>
          <Grid2 xs={12} lg={12} className="center-items social-networks">
            <h3>{t.contact.socialNetworks}</h3>
          </Grid2>
          <Grid2 xs={2} lg={12} className="center-items" >
            <IconButton
              aria-label="LinkedIn"
              size="large"
              href={t.contact.linkedInLink}
              target="_blank"
              sx={{ color: "var(--theme-text)", transform: "scale(1.5)", width: 40, height: 40, margin:"1vh 1vw" }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              aria-label="GitHub"
              size="large"
              href={t.contact.githubLink}
              target="_blank"
              sx={{color: "var(--theme-text)", transform: "scale(1.5)", width: 40, height: 40, margin:"1vh 1vw" }}
            >
              <GitHubIcon />
            </IconButton>
          </Grid2>
        </Grid2>
      </Grid2>
      
      <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{'vertical': 'bottom', 'horizontal': 'left'}}>
        {(() => {
          if (snackResult.AlertColor === 'success'){
              return (
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }} variant="filled">
                  {snackResult.message}
                </Alert>
              )
          }
          else {
            return (
              <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }} variant="filled">
                {snackResult.message}
              </Alert>
            )
          }
        })()}
      </Snackbar>
    </div>
  );
};