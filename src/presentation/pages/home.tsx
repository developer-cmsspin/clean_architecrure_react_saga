import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../domain/home/model/card";
import { homePageBegin } from "../redux/home/reducers";
import logo from "../static/image/loading.gif";


const Home: React.FC = () => {
    const dispatch = useDispatch();
    const data = useSelector<any>(state => state.home.data) as any;
    const loading = useSelector<any>(state => state.home.loading) as boolean;

    useEffect(() => {
            dispatch(homePageBegin());
    }, [dispatch]);


    console.log(data);

    return (
        <>
            {
                loading
                    ?
                    <div>
                        <img alt="loading" src={logo} />
                    </div>
                    :
                    <div>
                       {
                         data.cards.map((_element:Card) =>(
                            <div>{_element.name}</div>
                         ))
                       }
                       <div>
                        {data.count}
                       </div>
                    </div>
            }
        </>
    );
}

export default Home;