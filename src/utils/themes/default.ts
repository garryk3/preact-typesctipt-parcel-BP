import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
    palette: {
        common: {
            black: '#000',
            white: '#fff'
        },
        background: {
            paper  : '#fff',
            default: '#fafafa'
        },
        primary: {
            light       : '#009B69',
            main        : '#007354',
            dark        : '#004230;',
            contrastText: '#fff'
        },
        secondary: {
            light       : '#ff4081',
            main        : '#f50057',
            dark        : '#c51162',
            contrastText: '#fff'
        },
        error: {
            light       : '#e57373',
            main        : '#FF3D3D',
            dark        : '#D90000',
            contrastText: '#fff'
        },
        text: {
            primary  : 'rgba(0, 0, 0, 0.87)',
            secondary: 'rgba(0, 0, 0, 0.54)',
            disabled : 'rgba(0, 0, 0, 0.38)',
            hint     : 'rgba(0, 0, 0, 0.38)'
        }
    }
});
