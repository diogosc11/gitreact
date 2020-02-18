import React, { useCallback } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {Title, Text, Button, Input, Ul, Li, StyledDeleteIcon, Input2} from './styled';
import Footer from '../Footer';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { BrowserRouter as Router, Switch, Route, Link, useHistory} from "react-router-dom";
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  input: {
    display: 'none',
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
  const [aux, setAux] = React.useState([]);
  const history = useHistory();

  function getAdotarGatinhos(){    
    return (
      history.push('/AdotarGatinhos')
    );
  }

  function getSendGatinhos(){    
    return (
      history.push('/SendGatinhos')
    );
  }

  function getEmailGatinhos(){    
    return (
      history.push('/EmailGatinhos')
    );
  }

  function getOnibus(){    
    return (
      history.push('/Onibus')
    );
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const filter2 = useCallback((index) => {
    const newTasks = aux.filter((task, taskIndex) => taskIndex !== index);
    setAux(newTasks);
  }, [aux]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            ToDoLists
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button key={'Enviar fotos de gatinhos'} onClick={() => getSendGatinhos()}>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary='Enviar fotos de gatinhos' />
          </ListItem>
          <ListItem button key={'Enviar gatinhos via email'} onClick={() => getEmailGatinhos()}>
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText primary='Enviar gatinhos via email' />
          </ListItem>
          <ListItem button key={'Pegar ônibus'} onClick={() => getOnibus()}>
            <ListItemIcon><AirportShuttleIcon /></ListItemIcon>
            <ListItemText primary='Pegar ônibus' />
          </ListItem>
          <ListItem button key={'Adotar gatinho'} onClick={() => getAdotarGatinhos()}>
            <ListItemIcon><FavoriteIcon /></ListItemIcon>
            <ListItemText primary='Adotar gatinho' />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Title>A importância de enviar gatinhos</Title>
        <Text>Gatos são majestosos por excelência. Quando filhotes, são ainda mais apaixonantes. Para quem está pensando em adquirir um bebê felino, é importante saber que eles têm exigências diferentes dos adultos. A alimentação deve ser específica para filhotes, que garante todos os nutrientes necessários para o desenvolvimento deles. “Existem rações para gatinhos de até quatro meses, de quatro a 12 meses e, inclusive, para filhotes castrados”, diz a Dra. Vanessa Zimbres, médica veterinária da clínica Gato é Gente Boa, em Itu, especializada em gatos. Segundo ela, “é importante, desde cedo, acostumar os gatinhos a aceitarem a alimentação úmida − sachês, latinhas, também específica para filhotes”. Isso porque a ração úmida fornece maior quantidade de proteínas e ajuda a hidratar o corpo dos pequenos. Outra recomendação da veterinária é desvermifugar os filhotes a partir dos 21 dias de vida, antes de começar o esquema de vacinação. Para gatinhos de 45 a 60 dias, é recomendada a primeira dose da vacina múltipla, que protege contra rinotraqueíte, leucemia felina, entre outras doenças. A segunda dose deve ser dada 21 dias depois e, a partir dos quatro meses de idade, já se pode começar a vacinação antirrábica, de frequência anual. Também vale lembrar que filhotes muito novinhos podem não conhecer onde devem ou não fazer xixi. Por isso, é importante deixar a caixa de areia higiênica em um lugar de fácil acesso ao gatinho, que, por instinto, irá se habituar a usá-la sempre que precisar. Dependendo do tamanho da casa, pode ser necessário ter mais de uma caixa, posicionadas em lugares estratégicos e muito frequentados pelo filhote. O melhor a fazer, quando se receber um filhotinho em casa, é procurar a opinião de um veterinário, que saberá orientar sobre os melhores cuidados para seu bichano.</Text>
        <img src={'https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_960_720.png'} alt="" width='150px'/>
        <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
        <label htmlFor="icon-button-file">
          <IconButton color="primary" aria-label="upload picture" component="span">
            <PhotoCamera />
          </IconButton>
        </label>
              
      </main>
    </div>
  );
}

/*<label htmlFor="contained-button-file">
          <br />
          <label htmlFor="icon-button-file">
        <input accept="image/*" id="inputgatinho" type="file" />
          <IconButton color="primary" aria-label="upload picture">
              <PhotoCamera />
          </IconButton>
          </label>
        </label>
*/