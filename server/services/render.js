
const homeRoutes = (req,res) => {
    res.render('index',{
        online:true
    })
}
export {homeRoutes}
