import {url} from "../models/url.model.js"
import { nanoid } from "nanoid"

const handleUrlShortRequest = async(req ,res)=>{
    console.log(req.body)
    const id = nanoid(8)
    try {
        const shorturl = await  url.create({
            ShortId : id ,
            redirectUrl :  req.body.url ,
            visits:[]
         })
         console.log(shorturl)
         if(shorturl){
         res.json(`http://localhost:8000/api/url/${id}`).status(200)
         }else{
             res.status(500).send("Error")
         }
    } catch (error) {
        console.log(error.message)
    }
   
}



const redirectControl = async(req, res) => {
    const ShortId = req.params.ShortId;  // Access ShortId from the URL path
    console.log("ShortId:", ShortId);

    const urlData = await url.findOneAndUpdate(
        { ShortId },
        {
            $push: {
                visits: { timestamps: Date.now() }
            }
        }
    );

    if (!urlData) {
        return res.status(404).send("Short URL not found");
    }

    console.log(urlData);  // This should show the correct URL data
    res.redirect(urlData.redirectUrl);  // Redirect to the original URL
};



export  {
    handleUrlShortRequest,
    redirectControl
}