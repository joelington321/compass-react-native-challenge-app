export interface ProductData {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

export enum StateDisplay {
    Home,
    Cart,
    Info
}

export const icons = {
    iconStar: require('../assets/icons/icon_star.png'),
    iconCart: require('../assets/icons/icon_cart.png'),
    iconEmail: require('../assets/icons/icon_mail.png'),
    iconPassword: require('../assets/icons/icon_lock.png'),
    iconUser: require('../assets/icons/icon_user.png'),
    iconBack: require('../assets/icons/icon_back.png'),
    iconHomeF: require('../assets/icons/icon_home-focused.png'),
    /*iconHomeBar: require('../assets/icons/icon_home-bar'),*/
    iconCartF: require('../assets/icons/icon_cart-focused.png'),
    iconCartBar: require('../assets/icons/icon_cart-bar.png'),
}