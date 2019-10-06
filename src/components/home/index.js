import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Game from '../game';
import Setup from '../setup';
import './style.css';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    setSetup = () => {
        let setup = {};
        this.setStatus({ setup });
    }

    render() {

        const { setup } = this.state;

        return (
            <>
            <div className="root">
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <Typography variant="h6" color="inherit">
                            Tic-tac-toe
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>

            <div align='center'>
                <p> Jogo desenvolvido utilizando o algoritmo de <i>MinMax</i> para a disciplina de <i>Inteligência Artificial</i> do curso de graduação em ciência da computação da UFLA. </p>
            </div>

            <Grid container justify="center" spacing={3}>
                <Grid item xs={6}>
                    <div className="setup">
                        <Setup setSetup={this.setSetup}/>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <Game setup={setup} />
                </Grid>
            </Grid>
            </>
        );
    }
}


export default Home;
