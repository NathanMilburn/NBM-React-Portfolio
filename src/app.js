function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <div className="">
                    <Header />
                    <div className="containter">
                        <Routes>
                            <Route 
                                path="/"
                                element={<Home />}/>
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </Router>
        </ApolloProvider>
    );
}