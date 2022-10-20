const {MongoClient, ServerApiVersion} = require('mongodb');
const uri = "mongodb+srv://BorphAdmin:2g2At1xYtmlPk8SW@cluster0.cxzydjb.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function main(){
  try {

       await client.connect(err => {
         const collection = client.db("test").collection("devices");
         console.log("Connected correctly to server");
         // perform actions on the collection object
         client.close();
        });;
   } catch (err) {

       console.log(err.stack);

   }

   finally {

       await client.close();

   }
}
main().catch(console.dir)
