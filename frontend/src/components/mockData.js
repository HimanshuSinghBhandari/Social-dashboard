// Images.
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import instagram from "../images/icon-instagram.svg";
import youtube from "../images/icon-youtube.svg";
import up from "../images/icon-up.svg";
import down from "../images/icon-down.svg";

const mockData = {
    metrics: {
        followers: 1000,
        posts: 50,
        likes: 5000,
        comments: 1000,
        engagementRate: "75%",
    },
    chartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        values: [100, 200, 150, 320, 270, 190, 210, 160, 390, 250, 300, 250],
        options: ["bar", "pie", "radar", "polarArea", "doughnut", "line"],
    },
    user: {
        username: 'Himanshu Singh',
        email: 'himanshubhandari4675@gmail.com',
        age: 21,
        city: 'Dehradun',
        country: 'Engineer',
        occupation: 'Software Engineer',
        hobbies: ['Coding'],
        socialMedia: { instagram: '@himanshu14rt', youtube: 'HeyTech' }
    },
    followers: [
        {
            icon: facebook,
            username: "Himanshu Singh",
            count: 1987,
            countLabel: "Followers",
            todayCount: 12,
            rank: up,
            highlighter: "border-blue-600",
        },
        {
            icon: instagram,
            username: "Himanshu Singh",
            count: "11K",
            countLabel: "Followers",
            todayCount: 1099,
            rank: up,
            highlighter: "border-pink-500",
        },
        {
            icon: twitter,
            username: "Himanshu Singh",
            count: 1044,
            countLabel: "Followers",
            todayCount: 99,
            rank: up,
            highlighter: "border-blue-500",
        },
        {
            icon: youtube,
            username: "Himanshu Singh",
            count: 8239,
            countLabel: "subscribers",
            todayCount: 144,
            rank: down,
            highlighter: "border-red-700",
        },
    ], // https://retoolapi.dev/nliizT/data
    overview: [
        {
            title: "Page Views",
            icon: facebook,
            count: 87,
            percentage: 3,
            color: "text-emerald-600",
            percentageIcon: up,
        },
        {
            title: "Likes",
            icon: facebook,
            count: 52,
            percentage: -2,
            color: "text-rose-600",
            percentageIcon: down,
        },
        {
            title: "Likes",
            icon: instagram,
            count: 5462,
            percentage: 2257,
            color: "text-emerald-600",
            percentageIcon: up,
        },
        {
            title: "Profile Views",
            icon: instagram,
            count: "52k",
            percentage: 1375,
            color: "text-emerald-600",
            percentageIcon: up,
        },
        {
            title: "Retweets",
            icon: twitter,
            count: 117,
            percentage: 303,
            color: "text-emerald-600",
            percentageIcon: up,
        },
        {
            title: "Likes",
            icon: instagram,
            count: 507,
            percentage: 553,
            color: "text-emerald-600",
            percentageIcon: up,
        },
        {
            title: "Likes",
            icon: youtube,
            count: 107,
            percentage: -19,
            color: "text-rose-600",
            percentageIcon: down,
        },
        {
            title: "Total Views",
            icon: youtube,
            count: 1407,
            percentage: -12,
            color: "text-rose-600",
            percentageIcon: down,
        },
    ],
};

export default mockData;