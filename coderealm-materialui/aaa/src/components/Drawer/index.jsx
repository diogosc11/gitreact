import React, { useCallback, useState, useEffect } from 'react';
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
import {Title, Text, Button, Input, Ul, Li, StyledDeleteIcon} from '../Drawer/styled';
import Footer from '../Footer';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { BrowserRouter as Router, Switch, Route, Link, useHistory} from "react-router-dom";

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
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [aux, setAux] = useState(() => JSON.parse(localStorage.getItem('tasks')) || []);
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

  useEffect(()=> {
    const data = JSON.stringify(aux);
    localStorage.setItem('tasks', data);
  },[aux])

  function handleAdd(){
    setAux([...aux, value]);
    setValue('');
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
        <Title>A importância dos ToDoLists</Title>
        <Text>O cuidado em identificar pontos críticos na consulta aos diversos militantes maximiza as possibilidades por conta dos modos de operação convencionais. Gostaria de enfatizar que o fenômeno da Internet cumpre um papel essencial na formulação dos paradigmas corporativos. O que temos que ter sempre em mente é que o desenvolvimento contínuo de distintas formas de atuação facilita a criação das diretrizes de desenvolvimento para o futuro. Todavia, o consenso sobre a necessidade de qualificação causa impacto indireto na reavaliação de alternativas às soluções ortodoxas.Podemos já vislumbrar o modo pelo qual a revolução dos costumes auxilia a preparação e a composição do impacto na agilidade decisória. As experiências acumuladas demonstram que o aumento do diálogo entre os diferentes setores produtivos estende o alcance e a importância das diversas correntes de pensamento. No entanto, não podemos esquecer que a execução dos pontos do programa faz parte de um processo de gerenciamento do orçamento setorial. No mundo atual, a consolidação das estruturas estimula a padronização das condições inegavelmente apropriadas. Acima de tudo, é fundamental ressaltar que o desafiador cenário globalizado oferece uma interessante oportunidade para verificação das posturas dos órgãos dirigentes com relação às suas atribuições. O incentivo ao avanço tecnológico, assim como a crescente influência da mídia promove a alavancagem das novas proposições. Assim mesmo, a estrutura atual da organização pode nos levar a considerar a reestruturação de todos os recursos funcionais envolvidos. Caros amigos, a mobilidade dos capitais internacionais representa uma abertura para a melhoria dos procedimentos normalmente adotados. Pensando mais a longo prazo, a expansão dos mercados mundiais afeta positivamente a correta previsão dos níveis de motivação departamental. Evidentemente, o início da atividade geral de formação de atitudes apresenta tendências no sentido de aprovar a manutenção dos métodos utilizados na avaliação de resultados. Nunca é demais lembrar o peso e o significado destes problemas, uma vez que a valorização de fatores subjetivos exige a precisão e a definição das condições financeiras e administrativas exigidas. Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se a contínua expansão de nossa atividade prepara-nos para enfrentar situações atípicas decorrentes do processo de comunicação como um todo. Ainda assim, existem dúvidas a respeito de como a complexidade dos estudos efetuados desafia a capacidade de equalização dos índices pretendidos. A nível organizacional, a determinação clara de objetivos agrega valor ao estabelecimento da gestão inovadora da qual fazemos parte. Desta maneira, a competitividade nas transações comerciais nos obriga à análise das formas de ação. O empenho em analisar a adoção de políticas descentralizadoras acarreta um processo de reformulação e modernização dos relacionamentos verticais entre as hierarquias. A prática cotidiana prova que o acompanhamento das preferências de consumo possibilita uma melhor visão global dos conhecimentos estratégicos para atingir a excelência. Por outro lado, o novo modelo estrutural aqui preconizado não pode mais se dissociar do levantamento das variáveis envolvidas. Neste sentido, a necessidade de renovação processual assume importantes posições no estabelecimento das regras de conduta normativas. Percebemos, cada vez mais, que a constante divulgação das informações ainda não demonstrou convincentemente que vai participar na mudança das direções preferenciais no sentido do progresso. Não obstante, o surgimento do comércio virtual talvez venha a ressaltar a relatividade do sistema de formação de quadros que corresponde às necessidades. É claro que a hegemonia do ambiente político deve passar por modificações independentemente do fluxo de informações. Por conseguinte, a percepção das dificuldades é uma das consequências do sistema de participação geral. Do mesmo modo, o entendimento das metas propostas obstaculiza a apreciação da importância do retorno esperado a longo prazo.</Text>
        <Input value={value} onChange={e =>setValue(e.target.value)}></Input>
        <Button onClick = {handleAdd}><strong>Adicionar tarefa</strong></Button>
        <Ul>
          {aux.map((element, index) => {
            return (
              <Li key={index}>{element} <StyledDeleteIcon index={index} onClick = {() => {filter2(index)}}/></Li>
            );
          })}
        </Ul>
        <Footer />
      </main>
    </div>
  );
}