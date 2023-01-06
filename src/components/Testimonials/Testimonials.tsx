import PersonPhoto1 from "../../assets/rachel_davis.jpg";
import PersonPhoto2 from "../../assets/ashley_williams.jpg";
import PersonPhoto3 from "../../assets/michael_johnson.jpg";
import "./testimonials.css";
const Testimonials: React.FC = () => {
  return (
    <div className="testimonials-container">
      <h1>Some thoughts from our clients</h1>
      <p style={{ padding: 20 }}>
        If you're selected for them you'll also get three tickets, opportunity
        to access Investor Office Hours and Mentor Hours and much more all for
        free.
      </p>
      <div className="section-container">
        <section>
          <div>
            <img
              src={PersonPhoto2}
              alt=""
              style={{
                width: "100%",
                textAlign: "center",
                objectFit: "cover",
                height: "auto",
                borderRadius: 16,
              }}
            />
          </div>
          <h3>Ashly Williams</h3>
          <p>@ashlywilliams</p>
          <p>
            I have been using this Notes App for a few months now and it has
            really helped me stay organized and on top of my tasks. The
            interface is easy to use and the ability to add colors to my notes
            adds a personal touch. Highly recommend!
          </p>
        </section>
        <section>
          <div>
            <img
              src={PersonPhoto3}
              alt=""
              style={{
                width: "100%",
                textAlign: "center",
                objectFit: "cover",
                height: "auto",
                borderRadius: 16,
              }}
            />
          </div>
          <h3>Michael Johnson</h3>
          <p>@michaeljohnson</p>
          <p>
            I love this Notes App! It has made a huge difference in my
            productivity. The search function is particularly helpful when I
            need to find a specific note quickly. The colors are a nice touch
            too. Definitely worth checking out.
          </p>
        </section>
        <section>
          <div>
            <img
              src={PersonPhoto1}
              alt=""
              style={{
                width: "100%",
                textAlign: "center",
                objectFit: "cover",
                height: "auto",
                borderRadius: 16,
              }}
            />
          </div>
          <h3>Rachel Davis</h3>
          <p>@racheldavis</p>
          <p>
            As a busy college student, having a reliable Notes App is a must.
            This one definitely delivers. It's easy to use and the color feature
            is a great way to visually organize my notes. Highly recommend to
            anyone looking for a good notes app.
          </p>
        </section>
      </div>
    </div>
  );
};
export default Testimonials;
