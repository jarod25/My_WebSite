import {Illustration} from './Illustration';
import './Error.css';
import {Translations} from "../i18n";
import { Container, Title, Text, Button, Group } from '@mantine/core';


interface IProps {
    t: Translations
}

export const Error = ({t}: IProps) => {
    return (
        <Container className="root">
            <div className="inner">
                <Illustration className="image"/>
                <div className="content">
                    <Title className="title">{t.errorPage.title}</Title>
                    <Text c="dimmed" size="lg" ta="center" className="description">
                        {t.errorPage.message}
                    </Text>
                    <Group>
                        <Button component="a" href="/" className="button">
                            {t.errorPage.buttonText}
                        </Button>
                    </Group>
                    {/*<a href="/">{t.errorPage.buttonText}</a>*/}
                </div>
            </div>
        </Container>
    );
}