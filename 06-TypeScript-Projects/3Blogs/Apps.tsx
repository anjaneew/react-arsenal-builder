import { useState } from "react";
import ArticleList from "./components/ArticleList";
import BlogForm from "./components/BlogForm";
import Modal from "./components/Modal";
import Navigation from "./components/Navigation";
import PeopleToFollow from "./components/PeopleToFollow";
import TopicsList from "./components/TopTopics";
import TrendsList from "./components/TrendList";
import { BlogProvider } from "./shared/BlogContext";
import { type Blog } from "./types";
import { IoMdAddCircle } from "react-icons/io";

const Apps = () => {

  const [isModalOpen, setModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const openModalForNewBlog = () => {
    setEditingBlog(null);
    setModalOpen(true);
  };
  const openModalForEdit = (blog: Blog) => {
    setEditingBlog(blog);
    setModalOpen(true);
  };

  return (
    <div>
      <BlogProvider>
        <Navigation />
        <div>
          <div>
            <div>
              <button onClick={openModalForNewBlog}>
                Add New Blog <IoMdAddCircle/>
              </button>
              <ArticleList onEdit={openModalForEdit}/>
              {isModalOpen && (
                <Modal onClose={() => setModalOpen(false)}>
                  <BlogForm 
                    existingBlog={editingBlog}
                    onClose={() => setModalOpen(false)}
                  />
                </Modal>
              )}
            </div>
          </div>
          <div>
            <PeopleToFollow/>
            <TrendsList/>
            <TopicsList/>
          </div>
        </div>
      </BlogProvider>
    </div>
  );
}

export default Apps;