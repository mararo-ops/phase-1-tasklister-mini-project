document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("create-task-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // prevent form's default submission behavior

        const taskDescription = document.getElementById("new-task-description").value;

        // Add the task to the task list
        const taskList = document.getElementById("tasks");
        const listItem = document.createElement("li");
        listItem.innerText = taskDescription;

        // Optional: Add a delete button for each task
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.onclick = function() {
            taskList.removeChild(listItem);
        };
        listItem.appendChild(deleteButton);

        taskList.appendChild(listItem);

        // Clear the input for the next task
        form.reset();
    });
});
