useEffect(() => {
  const handleResize = () => console.log("Resized!");
  window.addEventListener("resize", handleResize);
  
  // Sebaiknya di-clean up saat component unmount agar tidak terjadi memory leak & bug yang tidak dinginkan
  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
