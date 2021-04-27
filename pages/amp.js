import Head from 'next/head'

export const config = { amp: true }

const amp = () => {
    return (
        <>
            <Head>
                <title>Version amp</title>
            </Head>
            <h1>version amp</h1>
        </>
    )
}

export default amp