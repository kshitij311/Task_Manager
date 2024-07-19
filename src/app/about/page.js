<<<<<<< HEAD
async function takeTime() {
  await new Promise((resvole) => {
    setTimeout(resvole, 3000);
  });
}

export default async function About() {
  await takeTime();
  // throw new Error("this is manual error");
  return (
    <div>
      <h1>This is about page</h1>
    </div>
  );
}
=======
async function takeTime() {
  await new Promise((resvole) => {
    setTimeout(resvole, 3000);
  });
}

export default async function About() {
  await takeTime();
  // throw new Error("this is manual error");
  return (
    <div>
      <h1>This is about page</h1>
    </div>
  );
}
>>>>>>> 22658da22f57e96aa41b7f4c00cd744d3407e39d
