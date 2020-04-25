import {Slider, withStyles} from "@material-ui/core";

const  PrettoSlider = withStyles({
    root: {
        color: '#0b8cbc',
        height: 8,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        display: 'none',
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 6,
        borderRadius: 4,
    },
    rail: {
        height: 6,
        // borderRadius: 4,
    },
    mark: {
        backgroundColor: '#e15a00',
        borderRadius: 2,
        height: 10,
        width: 20,
        marginTop: -2,
        marginLeft: -8,
    },
    markActive: {
        opacity: 1,
        backgroundColor: '#e15a00',
    },
})(Slider)
export default PrettoSlider