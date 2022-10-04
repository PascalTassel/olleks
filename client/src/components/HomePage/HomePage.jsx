/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
  Grid, Box, Typography, useMediaQuery,
} from '@mui/material';
import './homePage.scss';
import { useTheme } from '@mui/material/styles';

/* images imports */
import funct1 from '../../Assets/images/DropImgSvg.svg';
import funct2 from '../../Assets/images/EventImgSvg.svg';
import funct3 from '../../Assets/images/Calendar-bro.svg';
// import teamIcon from '../../Assets/images/team-icon.svg';
import encartImg from '../../Assets/images/encartImg.svg';
import calendarImg from '../../Assets/images/CalendarImgSvg.svg';
import LoginContainer from '../../containers/LoginContainer';
import Jordane from '../../Assets/images/avatar_Jordane.jpeg';
import Pascal from '../../Assets/images/avatar_Pascal.jpeg';
import Hicham from '../../Assets/images/avatar_Hicham.jpeg';
import Ben from '../../Assets/images/avatar_Ben.jpeg';
import Mathieu from '../../Assets/images/avatar_Mathieu.jpeg';

function HomePage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          mb: {
            xs: theme.spacing(3),
          },
          alignItems: 'center',
          position: 'relative',
          backgroundImage: `url(${calendarImg})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: {
            xs: 'center',
            md: '42vw center',
          },
          backgroundSize: {
            // xs: '60vw auto',
            md: 'contain',
          },
          height: {
            md: 600,
          },
          backgroundColor: theme.palette.common,
        }}
      >
        <Box sx={{
          position: 'relative',
          textAlign: 'center',
          width: {
            xs: '100%',
            md: '50vw',
          },
          [theme.breakpoints.down('md')]: {
            marginTop: '75vw',
            padding: theme.spacing(1),
          },
        }}
        >
          {/*
          Title and subtitle, with the connect zone, on display only on large screen.
          */}
          <Typography variant="h1" sx={{ fontSize: '4em', margin: '.5rem' }}>
            O'lleks
          </Typography>
          <Typography variant="h2">
            Votre nouvel outil de gestion de planning
          </Typography>

          {/*
          Blocks the view of the component on small screens
          */}
          {!isMobile
          && (
          <Box
            sx={{
              margin: theme.spacing(3, 'auto'),
              width: '50vw',
              maxWidth: 400,
              display: {
                xs: 'none',
                sm: 'block',
              },
            }}
          >
            <LoginContainer />
          </Box>
          )}
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: theme.palette.background.component,
        }}
      >
        {/*
        Functionnalities global block
        */}
        <Grid
          container
          columnSpacing={{
            xs: 2,
            md: 4,
            lg: 16,
          }}
          sx={{
            textAlign: 'center',
            mx: 'auto',
            py: {
              xs: theme.spacing(3),
            },
            px: {
              lg: theme.spacing(16),
              xs: theme.spacing(2),
            },
          }}
        >
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              my: {
                xs: theme.spacing(3),
                md: theme.spacing(6),
              },
            }}
          >
            <Box
              sx={{
                height: 250,
                width: 250,
                backgroundColor: theme.palette.background.default,
                backgroundImage: `url(${funct1})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: '60%',
                borderRadius: '50%',
                border: 1,
                borderColor: theme.palette.divider,
                mx: 'auto',
                marginBottom: theme.spacing(2),
              }}
            />
            <Typography
              variant="h5"
              component="span"
              sx={{
                marginTop: theme.spacing(2),
              }}
            >
              Disponible sur tous les supports,
              gérez vos effectifs aussi bien au bureau qu'en déplacement.
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              my: {
                xs: theme.spacing(3),
                md: theme.spacing(6),
              },
            }}
          >
            <Box
              sx={{
                height: 250,
                width: 250,
                backgroundColor: theme.palette.background.default,
                backgroundImage: `url(${funct2})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: '60%',
                borderRadius: '50%',
                border: 1,
                borderColor: theme.palette.divider,
                mx: 'auto',
                marginBottom: theme.spacing(2),
              }}
            />
            <Typography
              variant="h5"
              component="span"
              sx={{
                marginTop: theme.spacing(2),
              }}
            >
              Gardez une vue d'ensemble sur vos équipes
              afin de répondre plus efficacement à vos besoins.
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              my: {
                xs: theme.spacing(3),
                md: theme.spacing(6),
              },
            }}
          >
            <Box
              sx={{
                height: 250,
                width: 250,
                backgroundColor: theme.palette.background.default,
                backgroundImage: `url(${funct3})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: '60%',
                borderRadius: '50%',
                border: 1,
                borderColor: theme.palette.divider,
                mx: 'auto',
                marginBottom: theme.spacing(2),
              }}
            />
            <Typography
              variant="h5"
              component="span"
              sx={{
                marginTop: theme.spacing(2),
              }}
            >
              Communiquez aisément avec vos collaborateurs via une plateforme claire
              et facile d'utilisation.
            </Typography>
          </Grid>
        </Grid>

        {/*
        2nd functionnality global block
        */}
        <Box
          component="section"
          sx={{
            textAlign: 'center',
            pt: theme.spacing(6),
            px: theme.spacing(3),
            backgroundColor: theme.palette.primary.main,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: theme.palette.background.default,
            }}
          >
            La fiche en T dans l'ère du numérique

          </Typography>
          <Box
            sx={{ mx: 'auto', maxWidth: '50rem' }}
          >
            <Typography
              component="p"
              variant="h5"
              sx={{
                color: theme.palette.text.secondary,
              }}
            >
              Visant à la digitalisation des plannings en fiche en 'T', et avec
              l'expérience utilisateur au coeur de sa conception, O'lleks propose un
              éventail de fonctionnalités permettant une gestion d'effectif facile et efficace.
            </Typography>
            <img src={encartImg} alt="" className="encart--img" />
          </Box>
        </Box>

        {/*
        Team global block
        */}
        <Box
          component="section"
          sx={{
            textAlign: 'center',
            my: theme.spacing(6),
          }}
        >
          <Typography component="p" variant="h2">
            Rencontrez notre équipe
          </Typography>

          {/*
          Individual team items
          */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-evenly',
              maxWidth: '1200px',
              mx: 'auto',
              mt: theme.spacing(4),
              textAlign: 'center',
              color: theme.palette.text.primary,
            }}
          >
            <Box
              sx={{
                margin: '.5em',
                width: '12em',
              }}
            >
              <img src={Jordane} alt="" className="team--img" />
              <Typography variant="h5" mt={1}>
                Jordane Dévemy
              </Typography>
              <Typography component="p" variant="caption" mt={1}>
                Product Owner
              </Typography>
              <Typography component="p" variant="caption" mt={1}>
                Lead développeur back-end
              </Typography>
            </Box>

            <Box
              sx={{
                margin: '.5em',
                width: '12em',
              }}
            >
              <img src={Pascal} alt="" className="team--img" />
              <Typography variant="h5" mt={1}>
                Pascal Tassel
              </Typography>
              <Typography component="p" variant="caption" mt={1}>
                Lead développeur front-end
              </Typography>
            </Box>

            <Box
              sx={{
                margin: '.5em',
                width: '12em',
              }}
            >
              <img src={Hicham} alt="" className="team--img" />
              <Typography variant="h5" mt={1}>
                Hicham Chrita
              </Typography>
              <Typography component="p" variant="caption" mt={1}>
                SCRUM Master
              </Typography>
              <Typography component="p" variant="caption" mt={1}>
                Développeur back-end
              </Typography>
            </Box>

            <Box
              sx={{
                margin: '.5em',
                width: '12em',
              }}
            >
              <img src={Ben} alt="" className="team--img" />
              <Typography variant="h5" mt={1}>
                Ben Guillemot
              </Typography>
              <Typography component="p" variant="caption" mt={1}>
                Git Master
              </Typography>
              <Typography component="p" variant="caption" mt={1}>
                Développeur front-end
              </Typography>
            </Box>

            <Box
              sx={{
                margin: '.5em',
                width: '12em',
              }}
            >
              <img src={Mathieu} alt="" className="team--img" />
              <Typography variant="h5" mt={1}>
                Mathieu Lebreton
              </Typography>
              <Typography component="p" variant="caption" mt={1}>
                Référent technique
              </Typography>
              <Typography component="p" variant="caption" mt={1}>
                Développeur front-end
              </Typography>
            </Box>

          </Box>
        </Box>
      </Box>
    </>
  );
}

HomePage.propTypes = {
};

export default React.memo(HomePage);
