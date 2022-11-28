import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  if(!stripePromise) {
    // stripePromise = loadStripe(`${process.env.NEXT_PULIC_STRIPE_PUBLISHABLE_KEY}`);
    stripePromise = loadStripe("pk_test_51M93xESAO7EoC4e00MMChn9VhtD0lFTmMu71sTCMwJCtP91JQ5q6i6o2Lig2LAoozYaYJJEFsRvY5baetO4JuOUw005SYTLcwl");
  }

  return stripePromise;
}

export default getStripe;