export default function Card2({madeby,button = "Check it out ->"}) {
   console.log(madeby,button);
  return (
    <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100 ali">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0V3JjiFnaRluWA0KGHZVvRpHsaPIyl_5-DkrQWAxk4vM7LUtD1h4wMfYu&s=10"
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide"> <h2 className="bold">Lion - The King of the Jungle</h2></h2>
          <p className="text-gray-400">
The lion is one of the most powerful and majestic animals in the world. Known as the "King of the Jungle," lions symbolize strength, courage, and leadership. They live in groups called prides and are found mainly in the grasslands and savannas of Africa. With their impressive roar and commanding presence, lions have fascinated humans for centuries.
          </p>
        </div>
        <button
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
        >
          {button}
        </button>
      </div>
    </div>
  );
}
