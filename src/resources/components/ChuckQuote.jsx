import React, { useEffect } from 'react'
import 'antd/dist/antd.css'
import { Avatar, Comment } from 'antd'
import '../styles/_home.scss'
import { useRootStore } from '../mobx/RootStoreProvider'
import { observer } from 'mobx-react-lite'


export const ChuckQuote = observer( () => {

    // const [ quote, setQuote ] = useState([])
    //
    // const getData = async() => {
    //     const response = await getQuote()
    //     setQuote(response.quote)
    // }
    //
    // useEffect(() => {
    //     getData()
    // }, [])

    const { quote$, getQuote, setInitialQuote } = useRootStore()

    useEffect(() => {
        getQuote()
    }, [ getQuote ])

    const actions = [
        <span key="comment-basic-reply-to" onClick={ () => getQuote() }>Another one</span>
    ]

    console.log(quote$)

    return (
        <div style={ { width: '100vw' } }>
            <div style={ { width: '40%', margin: '0 auto' } }>
                <div id="comment-square">
                    <Comment
                        actions={ actions }
                        author={ <p style={ { color: 'white' } }>Chuckie</p> }
                        avatar={
                            <Avatar
                                src="https://media-exp1.licdn.com/dms/image/C4D12AQGdDFR5UfEClQ/article-cover_image-shrink_720_1280/0/1534116603047?e=1628726400&v=beta&t=KjMY9PiI-2SKMWInM7W8YzazAH5mTv_m1Ho3fi9YTgM"
                                alt="chuck"
                            />
                        }
                        content={
                            <p>{ quote$ }</p>
                        }
                    />
                </div>
            </div>
        </div>
    )
})
