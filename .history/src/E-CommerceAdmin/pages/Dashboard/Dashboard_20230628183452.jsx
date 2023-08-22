/** @format */

import { FiUser } from "react-icons/fi";
import HOC from "../../layout/HOC";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const card = [
    {
      progress: "bg-green-400",
      title: "Total Customer's",
      number: 20,
      icon: (
        <i
          className="fa-solid fa-user text-2xl"
          style={{ color: "#4099ff" }}
        ></i>
      ),
      bg: "#4099ff",
      link: "/Customer",
    },
    {
      progress: "bg-green-400",
      title: "Total Seller's",
      number: 50,
      icon: <FiUser className="text-2xl text-[#29cccc]" />,
      bg: "#29cccc",
      link: "/Admin",
    },
    {
      progress: "bg-green-400",
      title: "total Product",
      number: 60,
      icon: <i class="fa-solid fa-box text-2xl text-[#3c335d]"></i>,
      bg: "#3c335d",
      link: "/Product",
    },
    {
      progress: "bg-green-400",
      title: "total category",
      number: 30,
      icon: <i className=" fa-brands fa-slack text-2xl text-[#64878e]"></i>,
      bg: "#64878e",
      link: "/Category",
    },

    {
      progress: "bg-green-400",
      title: "total subcategory",
      number: 100,
      icon: (
        <i className=" fa-solid fa-layer-group text-2xl text-[#1b6975]"></i>
      ),
      bg: "#1b6975",
      link: "/Orders",
    },

    {
      progress: "bg-green-400",
      title: "total Notification",
      number: 100,
      icon: <i className=" fa-solid fa-envelope text-2xl text-[#659cca]"></i>,
      bg: "#659cca",
      link: "/Orders",
    },

    {
      progress: "bg-green-400",
      title: "total Banner",
      number: 100,
      icon: <i className=" fa-solid fa-image text-2xl text-[#6bb07e]"></i>,
      bg: "#6bb07e",
      link: "/Orders",
    },

    {
      progress: "bg-green-400",
      title: "total Coupon",
      number: 100,
      icon: <i className=" fa-solid fa-ticket text-2xl text-[#944f81]"></i>,
      bg: "#944f81 ",
      link: "/Orders",
    },
    {
      progress: "bg-green-400",
      title: "total Orders",
      number: 100,
      icon: (
        <i className=" fa-solid fa-cart-shopping text-2xl text-[#637ce6]"></i>
      ),
      bg: "#637ce6",
      link: "/Orders",
    },
  ];
  return (
    <>
      <section className="grid md:grid-cols-4 grid-cols-2 gap-y-6 gap-x-4">
        {card.map((card, index) => {
          return (
            <div
              className="px-5 py-8 bg-slate-200 space-y-2 shadow-xl flex flex-col  rounded-md cardDiv"
              key={index}
              style={{
                backgroundColor: `${card.bg}`,
                textTransform: "uppercase",
              }}
              onClick={() => navigate(`${card.link}`)}
            >
              <div className="grid  justify-between grid-cols-4">
                <div className="flex flex-col col-span-3 space-y-1">
                  <span
                    className="tracking-widest text-gray-900"
                    style={{ color: "#fff" }}
                  >
                    {card.title}
                  </span>
                  <span
                    className="tracking-wider text-gray-700 text-xl md:text-2xl font-semibold"
                    style={{ color: "#fff" }}
                  >
                    {card.number}
                  </span>
                </div>
                <div className="flex rounded-full w-10 h-10 sm:w-12 sm:h-12 bg-white justify-center items-center iCOn">
                  {card.icon}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default HOC(Dashboard);
