import React ,{FC} from "react";
import { StyledLoader } from "./preloader.style";

const Preloader: FC = () => {
    return (
        <StyledLoader>
            loading......
        </StyledLoader>
    );
};

export default Preloader;
