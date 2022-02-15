import type { NextPage } from 'next'
import { Layout } from '../common/features'
import { PageNotFound } from '../modules'
import React from 'react'

const CustomPageNotFound: NextPage = () => {
    return (
        <>
            <Layout>
                <PageNotFound/>
            </Layout>
        </>
    )
}

export default CustomPageNotFound
