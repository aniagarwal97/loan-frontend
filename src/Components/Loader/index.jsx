import React, { Component } from 'react'
import { connect } from 'react-redux';

const LoaderImage = () => (
    <svg width='200px' height='200px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" className="uil-default">
        <rect x="0" y="0" width="100" height="100" fill="none" className="bk"></rect>
        <rect x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#000000' transform='rotate(0 50 50) translate(0 -30)'>
            <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0s' repeatCount='indefinite' />
        </rect>
        <rect x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#000000' transform='rotate(30 50 50) translate(0 -30)'>
            <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.08333333333333333s' repeatCount='indefinite' />
        </rect>
        <rect x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#000000' transform='rotate(60 50 50) translate(0 -30)'>
            <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.16666666666666666s' repeatCount='indefinite' />
        </rect>
        <rect x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#000000' transform='rotate(90 50 50) translate(0 -30)'>
            <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.25s' repeatCount='indefinite' />
        </rect>
        <rect x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#000000' transform='rotate(120 50 50) translate(0 -30)'>
            <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.3333333333333333s' repeatCount='indefinite' />
        </rect>
        <rect x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#000000' transform='rotate(150 50 50) translate(0 -30)'>
            <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.4166666666666667s' repeatCount='indefinite' />
        </rect>
        <rect x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#000000' transform='rotate(180 50 50) translate(0 -30)'>
            <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.5s' repeatCount='indefinite' />
        </rect>
        <rect x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#000000' transform='rotate(210 50 50) translate(0 -30)'>
            <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.5833333333333334s' repeatCount='indefinite' />
        </rect>
        <rect x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#000000' transform='rotate(240 50 50) translate(0 -30)'>
            <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.6666666666666666s' repeatCount='indefinite' />
        </rect>
        <rect x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#000000' transform='rotate(270 50 50) translate(0 -30)'>
            <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.75s' repeatCount='indefinite' />
        </rect>
        <rect x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#000000' transform='rotate(300 50 50) translate(0 -30)'>
            <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.8333333333333334s' repeatCount='indefinite' />
        </rect>
        <rect x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#000000' transform='rotate(330 50 50) translate(0 -30)'>
            <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.9166666666666666s' repeatCount='indefinite' />
        </rect>
    </svg>
)

class Loader extends Component {

    constructor() {
        super();
        this.state = {
            isLoading: false
        }
    }

    static getDerivedStateFromProps(props, state) {
        Object.assign(state,
            { isLoading: props.loader.isLoading }
        )
        return state;
    }

    render() {
        if (this.state.isLoading)
            return (
                <div style={{ position: 'absolute', left: 0, textAlign: 'center', width: '100%', height: '100vh', top: 0 }}>
                    <div style={{ marginTop: 'calc(50vh - 100px)' }}>
                        <LoaderImage />
                    </div>
                </div>
            )
        return null
    }
}

const mapStateToProps = state => ({
    loader: state.loader
});
const mapDispatchToProps = dispatch => ({
});
export default connect(mapStateToProps, mapDispatchToProps)(Loader);