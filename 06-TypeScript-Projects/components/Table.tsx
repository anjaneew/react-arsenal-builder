import React, { useState } from "react";
import { data } from "../utils/data";

type Config =  {
    key: string;
    direction: string;
}

type Filter = {
    name: string;
    country: string;
    email: string;
    project: string;
    status: string;
}

const ProjectTable = () => {

    const [projects, setProjects] = useState(data);
    const [sortConfig, setSortConfig] = useState<Config | null>(null);
    const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
    const [filtersVisible, setFiltersVisible] = useState<boolean>(false);
    const [searchQuery, setSearhQuery] = useState<string>("");
    const [filters, setFilters] = useState<Filter>({
            name: "",
            country: "",
            email: "",
            project: "",
            status: "",
    });
    const [statusDropdownVisible, setStatusDropdownVisible] = useState<number | null>(null);

    const sortProjects = (key: string) => {
      let sortedProjects = [...projects];

      if(
        sortConfig &&
        sortConfig.key === key &&
        sortConfig.direction === "ascending"
      ) {
        sortedProjects.sort((a, b) => (a[key] > b[key] ? -1 : 1));
        setSortConfig({ key, direction: "descending" });
      } else {
        sortedProjects.sort((a, b) => (a[key] > b[key] ? 1 : -1));
        setSortConfig({ key, direction: "ascending" });
      }
      setProjects(sortedProjects);
    };

    const handleSortOptionClick = (key: string) => {
      sortProjects(key);
      setDropdownVisible(false);
    };

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFilters({
        ...filters, 
        [e.target.name]: e.target.value,
      });
    };

    const handleStatusChange = (index: number, newStatus: string) => {
      const updatedProjects = projects.map((project, i) => 
        i === index ? {
          ...project, 
          status: newStatus, 
          progress: newStatus === "Completed" ? "100%" : project.progress, } : project
      );
      setProjects(updatedProjects);
      setStatusDropdownVisible(null);
    };

    const filteredProjects = projects.filter(
      (project) => 
        (searchQuery === "" || 
          Object.values(project).some((value) => value.toLowerCase().includes(searchQuery.toLowerCase())
        )) &&
        (filters.name === "" || 
          project.client.toLowerCase().includes(filters.name.toLowerCase())
        ) && 
        (filters.country === "" || 
          project.country.toLowerCase().includes(filters.country.toLowerCase())) && 
        (filters.email === "" || project.email.toLowerCase().includes(filters.email.toLowerCase())) && 
        (filters.project === "" || project.project.toLowerCase().includes(filters.project.toLowerCase())) && 
        (filters.status === "" || project.status.toLowerCase().includes(filters.status.toLowerCase())) 
        );

    //Calculate paginated data
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage);
    const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
    const handlePageChange = (pageNumber : number) => setCurrentPage(pageNumber);

    return(
      <div>
        {/*Sorting*/}
        <div>
          <div>
            <button onClick={() => setDropdownVisible(!dropdownVisible)}>Sort</button>
            {dropdownVisible && (
              <div>
                <button onClick={() => handleSortOptionClick("client")}>Name</button>
                <button onClick={() => handleSortOptionClick("country")}>Country</button>
                <button onClick={() => handleSortOptionClick("date")}>Date</button>
              </div>
            )}
          </div>
            {/*Filters*/}
            <div>
              <button onClick={() => setFiltersVisible(!filtersVisible)}>Filters</button>
              {filtersVisible && (
                <div>
                  <div>
                    <label>Filter by Name:</label>
                    <input type="text" name="name" 
                      value={filters.name}
                      onChange={handleFilterChange}
                      />
                  </div>
                  <div>
                    <label>Filter by Country:</label>
                    <input type="text" name="country" 
                      value={filters.country}
                      onChange={handleFilterChange}/>
                  </div>
                  <div>
                    <label>Filter by Email:</label>
                    <input type="text" name="email" 
                      value={filters.email}
                      onChange={handleFilterChange}/>
                  </div>
                  <div>
                    <label>Filter by Project:</label>
                    <input type="text" name="project" 
                      value={filters.project}
                      onChange={handleFilterChange}/>
                  </div>
                  <div>
                    <label>Filter by Status:</label>
                    <input type="text" name="status" 
                      value={filters.status}
                      onChange={handleFilterChange}/>
                  </div>
                </div>
              )}
            </div>
        </div>

        {/*Main Table*/}
        <table>
          <thead>
            <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Country</th>
            <th>Email</th>
            <th>Project Name</th>
            <th>Task Progress</th>
            <th>Status</th>
            <th>Date</th>
            <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentProjects.map((project, index) => (
              <tr key={index}>
                <td>
                  <img src={project.image} alt={project.client}/>
                </td>
                <td>{project.client}</td>
                <td>{project.country}</td>
                <td>{project.email}</td>
                <td>{project.project}</td>
                <td>
                  <div>
                    <div>{project.progress}</div>
                  </div>
                </td>
                <td>
                  <span>{project.status}</span>
                </td>
                <td>{project.date}</td>
                <td>
                  <button onClick={() => handleStatusChange(index, "Completed")}>Mark Complete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default ProjectTable;