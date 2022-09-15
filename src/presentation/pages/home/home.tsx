import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../../domain/home/model/card'
import ResponseHome from '../../../domain/home/model/responseHome'
import { homePageBegin } from '../../redux/home/reducers'
import logo from '../../static/image/loading.gif'
import IState from '../../../domain/interface/presentation/IState'
import 'reflect-metadata'

const Home: React.FC = () => {
  const dispatch = useDispatch()
  const data = useSelector<IState, ResponseHome>(state => state.home.data)
  const loading = useSelector<IState, boolean>(state => state.home.loading)

  useEffect(() => {
    if (data.count === 0) {
      dispatch(homePageBegin())
    }
  }, [dispatch])

  // console.log(data);

  return (
        <>
            <div>{loading ? 'true' : false}</div>
            {
                loading
                  ? <div>
                        <img id="logo" alt="loading" src={logo} />
                    </div>
                  : <div>
                        {
                            data?.cards === undefined
                              ? <div>NO DATA</div>
                              : <>
                                    <div>list items</div>
                                    <>
                                        {
                                            data.cards.map((_element: Card) => (
                                                <div key={_element.name} >Name:{_element.name}</div>
                                            ))
                                        }
                                    </>
                                </>
                        }
                        {
                            data?.cards !== undefined
                              ? <div>
                                    {data.count}
                                </div>
                              : <></>
                        }

                    </div>
            }
        </>
  )
}

export default Home
