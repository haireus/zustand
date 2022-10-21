import usePostStore from "./app/post";
import { useEffect } from "react";

export const ListPost = () => {
  const { data, isError, loading, fetchPost } = usePostStore((state) => ({
    data: state.data,
    isError: state.isError,
    loading: state.loading,
    fetchPost: state.fetchPost,
  }));

  useEffect(() => {
    fetchPost();
  }, []);

  if (loading) return <h1>Loading ...</h1>;
  if (isError) return <h1>Error</h1>;

  return (
    <div>
      {data?.map((el) => (
        <div key={el.id}>{el.title}</div>
      ))}
    </div>
  );
};
