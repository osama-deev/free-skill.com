import Header from "../(components)/header/header";
import ImageCard from "../(components)/imageCard/imageCard";
import TextCard from "../(components)/textCard/textCard";

export default function Courses() {
  return (
    <>
      <Header title="our courses" />

      <section class="course">
        <h1>Course We Offer</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div class="row">
          <TextCard title="Undergraduate Programs" />
          <TextCard title="Graduate Programs" />
          <TextCard title="Adult Learning & Degree Completion" />
        </div>
      </section>

      <section class="facilities">
        <h1>Best Courses</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div class="row">
          <ImageCard title="Web Development" source="/img/course1.png"/>
          <ImageCard title="Artificial Intelligence" source="/img/course2.png"/>
          <ImageCard title="Data Science" source="/img/course3.png"/>
        </div>
      </section>
    </>
  );
}
