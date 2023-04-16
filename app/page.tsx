import Product from '@/component/Product'

import type { SexType } from '@faker-js/faker';

type SubscriptionTier = 'free' | 'basic' | 'business';

export interface User {
  _id: string;
  avatar: string;
  birthday: Date;
  email: string;
  firstName: string;
  lastName: string;
  sex: SexType;
  subscriptionTier: SubscriptionTier;
}

async function getData() {
    const data = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/user', { cache: 'no-store' })
    const user = await data.json()
    return user
  }

export default async function Home() {
    const data = await getData();
    return (
        <>
            <Product user={data}/>
        </>
    )
}
