/* eslint-disable no-shadow */
/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
  Box, Typography, Divider,
} from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import './legals.scss';

/* import imgs */
import legals from '../../Assets/images/lawSvg.svg';

function Legals() {
  const theme = useTheme();

  const LegalsSections = styled(Typography)(({ theme }) => ({
    marginTop: theme.spacing(2),
  }));

  const LegalsDivider = styled(Divider)(({ theme }) => ({
    color: theme.palette.divider,
  }));

  const LegalsText = styled(Typography)(({ theme }) => ({
    marginTop: theme.spacing(1),
  }));

  const LegalsHighlight = styled(Typography)(({ theme }) => ({
    marginTop: theme.spacing(1),
  }));

  return (
    <Box
      sx={{
        padding: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        color: theme.palette.text.primary,
      }}
    >
      <Typography
        variant="h1"
        sx={{
          textAlign: 'center',
        }}
      >
        Mentions légales
      </Typography>
      <LegalsDivider />
      <img
        src={legals}
        alt=""
        className="legals--img"
      />

      <LegalsSections variant="h3">
        Édition du site
      </LegalsSections>
      <LegalsDivider />

      <LegalsText>
        En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site internet
        {' '}
        <LegalsHighlight component="span">https://olleks.com</LegalsHighlight>
        {' '}
        l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
      </LegalsText>

      <LegalsHighlight component="span">
        Propriétaires du site :
      </LegalsHighlight>

      <LegalsText>
        Devémy Jordane, Chrita Hicham, Guillemot Ben, Tassel Pascal, Lebreton Mathieu
      </LegalsText>

      <LegalsHighlight component="span">
        Contact :
      </LegalsHighlight>

      <LegalsText>
        olleks@oclock.com
      </LegalsText>

      <LegalsSections variant="h3">
        Limitations de responsabilité
      </LegalsSections>
      <LegalsDivider />

      <LegalsText>
        L'équipe O'lleks ne pourra être tenue pour responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site
        {' '}
        <LegalsHighlight component="span">https://olleks.com</LegalsHighlight>
        .
      </LegalsText>

      <LegalsText>
        L'équipe O'lleks décline toute responsabilité quant à l’utilisation qui pourrait être faite des informations et contenus présents sur
        {' '}
        <LegalsHighlight component="span">https://olleks.com</LegalsHighlight>
        .
      </LegalsText>

      <LegalsText>
        L'équipe O'lleks s’engage à sécuriser au mieux le site
        {' '}
        <LegalsHighlight component="span">https://olleks.com</LegalsHighlight>
        , cependant sa responsabilité ne pourra être mise en cause si des données indésirables sont importées et installées sur son site à son insu.
      </LegalsText>

      <LegalsText>
        Des espaces interactifs sont à la disposition des utilisateurs. L'équipe O'lleks se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données.
      </LegalsText>

      <LegalsSections variant="h3">
        CNIL et gestion des données personnelles
      </LegalsSections>
      <LegalsDivider />

      <LegalsText>
        Conformément aux dispositions de la loi 78-17 du 6 janvier 1978 modifiée, l’utilisateur du site
        {' '}
        <LegalsHighlight component="span">https://olleks.com</LegalsHighlight>
        {' '}
        dispose d’un droit d’accès, de modification et de suppression des informations collectées.
      </LegalsText>

      <LegalsSections variant="h3">
        Liens hypertextes et cookies
      </LegalsSections>
      <LegalsDivider />

      <LegalsText>
        La navigation sur le site
        {' '}
        <LegalsHighlight component="span">https://olleks.com</LegalsHighlight>
        {' '}
        est susceptible de provoquer l’installation de cookie(s) sur l’ordinateur de l’utilisateur.
      </LegalsText>

      <LegalsText>
        Un "cookie" est un fichier de petite taille qui enregistre des informations relatives à la navigation d’un utilisateur sur un site. Les données ainsi obtenues permettent d'obtenir des mesures de fréquentation, par exemple.
      </LegalsText>

      <LegalsText>
        Vous avez la possibilité d’accepter ou de refuser les cookies en modifiant les paramètres de votre navigateur. Aucun cookie ne sera déposé sans votre consentement.
      </LegalsText>

      <LegalsText>
        Les cookies sont enregistrés pour une durée maximale de 1 mois.
      </LegalsText>

      <LegalsSections variant="h3">
        Droit applicable et attribution de juridiction
      </LegalsSections>
      <LegalsDivider />

      <LegalsText>
        Tout litige en relation avec l’utilisation du site
        {' '}
        <LegalsHighlight component="span">https://olleks.com</LegalsHighlight>
        {' '}
        est soumis au droit français.
      </LegalsText>

    </Box>
  );
}

export default React.memo(Legals);
