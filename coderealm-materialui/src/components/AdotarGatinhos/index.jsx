import React, { useCallback, useEffect, useState, useMemo } from 'react';
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
import { Title, Text, Button, Input, Ul, Li, StyledDeleteIcon, DivGrid, FlexImage, ImageBox } from './styled';
import Footer from '../Footer';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ClearIcon from '@material-ui/icons/Clear';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';

const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex'
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	menuButton: {
		marginRight: 36
	},
	hide: {
		display: 'none'
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap'
	},
	drawerOpen: {
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	drawerClose: {
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		overflowX: 'hidden',
		width: theme.spacing(7) + 1,
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(9) + 1
		}
	},
	toolbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: theme.spacing(0, 1),
		...theme.mixins.toolbar
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3)
	}
}));

export default function MiniDrawer() {
	const classes = useStyles();
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);
	const history = useHistory();
	const cats = useMemo(
		() => [
			{ name: 'Primeiro Gatinho', image: 'https://cataas.com/cat' },
      { name: 'Segundo Gatinho', image: 'https://cataas.com/cat' },
      { name: 'Terceiro Gatinho', image: 'https://cataas.com/cat' },
      { name: 'Quarto Gatinho', image: 'https://cataas.com/cat' },
      { name: 'Quinto Gatinho', image: 'https://cataas.com/cat' },
      { name: 'Sexto Gatinho', image: 'https://cataas.com/cat' },
      { name: 'Sétimo Gatinho', image: 'https://cataas.com/cat' },
      { name: 'Oitavo Gatinho', image: 'https://cataas.com/cat' },
      { name: 'Nono Gatinho', image: 'https://cataas.com/cat' },
		],
		[]
	);

	function getAdotarGatinhos() {
		return history.push('/AdotarGatinhos');
	}

	function getSendGatinhos() {
		return history.push('/SendGatinhos');
	}

	function getEmailGatinhos() {
		return history.push('/EmailGatinhos');
	}

	function getOnibus() {
		return history.push('/Onibus');
	}

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position='fixed'
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open
				})}
			>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						onClick={handleDrawerOpen}
						edge='start'
						className={clsx(classes.menuButton, {
							[classes.hide]: open
						})}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' noWrap>
						ToDoLists
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				variant='permanent'
				className={clsx(classes.drawer, {
					[classes.drawerOpen]: open,
					[classes.drawerClose]: !open
				})}
				classes={{
					paper: clsx({
						[classes.drawerOpen]: open,
						[classes.drawerClose]: !open
					})
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
						<ListItemIcon>
							<InboxIcon />
						</ListItemIcon>
						<ListItemText primary='Enviar fotos de gatinhos' />
					</ListItem>
					<ListItem button key={'Enviar email para um gatinho'} onClick={() => getEmailGatinhos()}>
						<ListItemIcon>
							<MailIcon />
						</ListItemIcon>
						<ListItemText primary='Enviar email para um gatinho' />
					</ListItem>
					<ListItem button key={'Pegar ônibus'} onClick={() => getOnibus()}>
						<ListItemIcon>
							<AirportShuttleIcon />
						</ListItemIcon>
						<ListItemText primary='Pegar ônibus' />
					</ListItem>
					<ListItem button key={'Adotar gatinho'} onClick={() => getAdotarGatinhos()}>
						<ListItemIcon>
							<FavoriteIcon />
						</ListItemIcon>
						<ListItemText primary='Adotar gatinho' />
					</ListItem>
				</List>
			</Drawer>
			<main className={classes.content}>
				<div className={classes.toolbar} />
				<Title>A importância de adotar gatinhos</Title>
				<DivGrid>
					{cats.map((cat, index) => {
						return (
							<FlexImage>
								<ImageBox>
									<img src={`${cat.image}?v=${index}`} width='400' height='300' />
								</ImageBox>
								<Button>Adotar</Button>
							</FlexImage>
						);
					})}
				</DivGrid>
			</main>
		</div>
	);
}
