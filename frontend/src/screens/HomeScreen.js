import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import Product from '../components/Product'
import ProductCarousel from '../components/ProductCarousel'

function HomeScreen({ history }) {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)


    const { error, loading, products, page, pages } = productList
    let keyword = history.location.search

    useEffect(() => {
        dispatch(listProducts(keyword))

    }, [dispatch, keyword])

    return (
        <div>
            {!keyword && <ProductCarousel />}

            <h1>Electronics</h1>
            {loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>
                    :
                    <div>
                        <Row>
                            {products.map(product => {
                                if (product.category == "Electronics") {
                                    return (
                                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                            <Product product={product} />
                                        </Col>
                                    )
                                }
                            }
                            )}
                        </Row>
                        <Paginate page={page} pages={pages} keyword={keyword} />
                    </div>
            }

            <h1>girl dress</h1>
            {loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>
                    :
                    <div>
                        <Row>
                            {products.map(product => {
                                if (product.category == "dress") {
                                    return (
                                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                            <Product product={product} />
                                        </Col>
                                    )
                                }
                            }
                            )}
                        </Row>

                    </div>
            }

        </div >
    )
}

export default HomeScreen
