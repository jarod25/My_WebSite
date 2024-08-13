import './Error.css';
import {Translations} from "../i18n";
import { Text, Group } from '@mantine/core';
import img from "../assets/img/404.svg";
import { Button } from '@mui/material';


interface IProps {
    t: Translations
}

export const Error = ({t}: IProps) => {
    return (
        <div className="page error center-items">
            <img src={img} alt="Une femme qui regarde à l'horizon dans le zéro du nombre 404" className="error-img"/>
            <Text c="dimmed" size="lg" ta="center" className="description">
                {t.errorPage.message}
            </Text>
                <Button 
                        href={"/"}
                        sx={[{
                            bgcolor: "var(--theme-lighter-text)",
                            width:"15vw",
                            margin: "4.5vh 25% 0 25%",
                            borderRadius: "7px",
                            color: "var(--important-text)!important",
                        },
                        (theme) => ({
                            '&:hover': {
                            color: "var(--important-text)!important",
                            border:"2px solid var(--theme-lighter-text)",
                            margin: "4.25vh 25% -.25vh 25%",
                            },
                        }),
                        ]}>
                        {t.errorPage.buttonText}
                    </Button>
        </div>
    );
}