import LottieComponent from "../common/lottie/lottieComponent";
import PropTypes from "prop-types";

const Loading = ({status}) => {

    if(status === "pending"){
        return <LottieComponent type="loadingAnimation"/>
    }else if(status === "rejected") {
        return <LottieComponent type="eror404"/>
    }
     
}

Loading.propTypes = {
    status: PropTypes.string.isRequired
}

export default Loading;
