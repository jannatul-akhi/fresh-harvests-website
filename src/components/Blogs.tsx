import Image from "next/image";


const Blogs = () => {

  const blogs = [
  {
    date: 'May 23, 2024',
    title: "Exploring Seasonal Delights: A Guide to What's Fresh Right Now",
    image: '/images/blog1.webp',
  },
  {
    date: 'May 23, 2024',
    title:
      'Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads',
    image: '/images/blog2.jpg',
  },
  {
    date: 'May 23, 2024',
    title:
      'The Art of Meal Prepping: How to Save Time and Eat Healthy Throughout the Week',
    image: '/images/blog3.jpg',
  },
];
  return (
    <div>
      <div className="text-center">
        <p className="   text-[#749B3F] text-[1.3rem] bg-[#749B3F1A] px-3 py-1 rounded-lg font-medium mb-2 inline-block">
          Our Blog
        </p>
        <h2 className="text-[1rem] md:text-[2rem] lg:text-[3rem] font-semibold text-gray-900 leading-tight">
          Fresh Harvest Blog
        </h2>
        <p className="text-[#4A4A52] text-[.87rem] font-normal mt-4">
          At Fresh Harvests, we are passionate about providing you with the
          freshest <br /> and most flavorful fruits and vegetables.
        </p>
      </div>
      <section className="w-11/12 mx-auto py-16">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 font-rubik">
        {blogs.map((blog, index) => (
          <div key={index} className="rounded-lg  transition-all duration-300">
            <div className="w-full h-[200px] relative overflow-hidden rounded-lg">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="mt-4">
              <p className="text-lg text-[#4A4A52] font-light font-questrial">{blog.date}</p>
              <h3 className="text-lg font-medium mt-1 text-[#212337]">
                {blog.title}
              </h3>
              <a
                href="#"
                className="mt-2 inline-flex items-center gap-1 text-[#FF6A1A] font-semibold text-lg hover:underline"
              >
                Read More <span>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default Blogs;