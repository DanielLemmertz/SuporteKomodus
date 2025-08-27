// staffData.js
import steve from "../../assets/images/steve.png";
import daniel from "../../assets/images/daniel.png";
import alexandra from "../../assets/images/alexandra.png";

const staffData = [
    {
        photo: steve,               // ✅ sem chaves extras
        name: "Steve Narancic",
        role: "CEO",
        phone: "+55 51 9597-9028",
    },
    {
        photo: alexandra,
        name: "Alexandra Pereira",
        role: "Financeiro",
        phone: "+55 51 8161-4242",
    },
    {
        photo: daniel,
        name: "Daniel Lemmertz",
        role: "Suporte",
        phone: "+55 51 9688-8667",
    },
];

export default staffData;
