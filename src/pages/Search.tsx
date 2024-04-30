export const Search = () => {
    return (
        <div>
            <section>
                <div className='categories' css={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                    maxWidth: "1171px",
                    margin: "0 auto"
                }}>
                    {Array.from({ length: 6 }).map((_, index) => {
                        return <div css={{ padding: "20px" }} key={index}>
                            <div className='categories' css={{}}>
                                <h2>Categories</h2>
                                <img src="https://via.placeholder.com/300" alt="" />
                                <p>Content</p>
                            </div>

                        </div>
                    })}
                </div>
                <section>
                    <div className='categories' css={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        alignItems: "center",
                        maxWidth: "1171px",
                        margin: "0 auto"
                    }}>
                        {Array.from({ length: 6 }).map((_, index) => {
                            return <div css={{ padding: "20px" }} key={index}>
                                <div className='categories' css={{}}>
                                    <h2>Categories</h2>
                                    <img src="https://via.placeholder.com/300" alt="" />
                                    <p>Content</p>
                                </div>

                            </div>
                        })}
                    </div>
                </section>
            </section>
        </div >
    )
}