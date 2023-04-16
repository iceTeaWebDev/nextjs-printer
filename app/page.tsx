import Image from 'next/image'
import { Inter } from 'next/font/google'
import './base.min.css'
import './main.css'
import './fancy.min.css'
import Product from '@/component/Product'
import { faker } from '@faker-js/faker';
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
function createRandomUser(): User {
  const sex = faker.name.sexType();
  const firstName = faker.name.firstName(sex);
  const lastName = faker.name.lastName();
  const email = faker.internet.email(firstName, lastName);
  return {
    _id: faker.datatype.uuid(),
    avatar: faker.image.avatar(),
    birthday: faker.date.birthdate(),
    email,
    firstName,
    lastName,
    sex,
    subscriptionTier: faker.helpers.arrayElement(['free', 'basic', 'business']),
  };
}

async function getData() {
    const user = createRandomUser();
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
