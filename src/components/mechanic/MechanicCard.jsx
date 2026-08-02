import Button from "../ui/Button";
import Card from "../ui/Card";


const MechanicCard = ({ mechanic, onBook }) => {

  return (

    <Card className="hover:shadow-2xl transition duration-300">


      {/* Top Section */}

      <div className="flex justify-between items-start">


        <div>


          <div className="flex items-center gap-3">


            <div className="
            w-14
            h-14
            rounded-2xl
            bg-blue-100
            flex
            items-center
            justify-center
            text-3xl
            ">
              👨‍🔧
            </div>



            <div>

              <h2 className="
              text-xl
              font-bold
              text-gray-800
              ">
                {mechanic.name}
              </h2>


              <p className="
              text-yellow-500
              font-semibold
              mt-1
              ">
                ⭐ {mechanic.rating} Rating
              </p>


            </div>


          </div>





          <p className="
          text-gray-500
          mt-5
          ">
            📍 {mechanic.distance}
          </p>




        </div>





        <span className="
        bg-green-100
        text-green-700
        px-3
        py-1
        rounded-full
        text-sm
        font-semibold
        ">

          Available

        </span>




      </div>







      {/* Services */}


      <div className="mt-6">


        <h3 className="
        font-semibold
        text-gray-700
        mb-3
        ">
          Services Offered
        </h3>



        <div className="flex flex-wrap gap-2">


          {mechanic.services.map((service,index)=>(


            <span

              key={index}

              className="
              bg-blue-50
              text-blue-700
              px-3
              py-2
              rounded-xl
              text-sm
              font-medium
              "

            >

              🔧 {service}

            </span>


          ))}


        </div>


      </div>








      {/* Bottom Action */}


      <div className="
      mt-8
      border-t
      pt-5
      flex
      justify-between
      items-center
      ">



        <div>


          <p className="
          text-sm
          text-gray-500
          ">
            Response Time
          </p>


          <p className="
          font-bold
          text-gray-800
          ">
            ⚡ 10-15 mins
          </p>


        </div>





        <Button

          onClick={() => onBook(mechanic)}

        >

          Book Now 🚗

        </Button>




      </div>



    </Card>

  );

};


export default MechanicCard;