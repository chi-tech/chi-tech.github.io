var _programmer_manual =
[
    [ "Adding code to the system", "dc/d4c/_dev_man_adding_code.html", [
      [ "So you want to add your own code", "dc/d4c/_dev_man_adding_code.html#devman0_sec0", [
        [ "Step 1 - Create your directory", "dc/d4c/_dev_man_adding_code.html#devman0_sec0_1", null ],
        [ "Step 2 - If there is no CMakeLists.txt, create one", "dc/d4c/_dev_man_adding_code.html#devman0_sec0_2", null ],
        [ "Step 3 - Create your source code", "dc/d4c/_dev_man_adding_code.html#devman0_sec0_3", null ],
        [ "Step 4 - Add the folder to the master CMakeLists.txt", "dc/d4c/_dev_man_adding_code.html#devman0_sec0_4", null ],
        [ "Step 5 - Include headers and use the code", "dc/d4c/_dev_man_adding_code.html#devman0_sec0_5", null ]
      ] ]
    ] ],
    [ "Using Chi-Tech as a library", "d8/d99/_dev_man_using_lib.html", [
      [ "So you want to use Chi-Tech as a library", "d8/d99/_dev_man_using_lib.html#devman01_02", [
        [ "Step 1 - Make a application directory and empty source file", "d8/d99/_dev_man_using_lib.html#devman01_02_01", null ],
        [ "Step 2 - Create CMakeLists.txt file", "d8/d99/_dev_man_using_lib.html#devman01_02_02", null ],
        [ "Step 3 - Edit the cmake file to connect to Chi-Tech", "d8/d99/_dev_man_using_lib.html#devman01_02_03", null ],
        [ "Step 4 - Add the basic code to test.cc", "d8/d99/_dev_man_using_lib.html#devman01_02_04", null ],
        [ "Step 5 - Compile the code", "d8/d99/_dev_man_using_lib.html#devman01_02_05", null ]
      ] ],
      [ "Adding lua-input to library-using apps", "d8/d99/_dev_man_using_lib.html#devman01_03", [
        [ "Step 1 - Create folder to contain lua sources.", "d8/d99/_dev_man_using_lib.html#devman01_03_01", null ],
        [ "Step 2 - Create a source file", "d8/d99/_dev_man_using_lib.html#devman01_03_02", null ],
        [ "Step 3 - Modify the CMakeLists.txt file to compile this code", "d8/d99/_dev_man_using_lib.html#devman01_03_03a", null ],
        [ "Step 4 - Modify test.cc to register the lua function", "d8/d99/_dev_man_using_lib.html#devman01_03_04a", null ]
      ] ]
    ] ],
    [ "Coding conventions", "db/d7b/_dev_man_code_conventions.html", [
      [ "Coding conventions", "db/d7b/_dev_man_code_conventions.html#sec0", [
        [ "File names", "db/d7b/_dev_man_code_conventions.html#devman1_sec0_1", null ],
        [ "General code", "db/d7b/_dev_man_code_conventions.html#devman1_sec0_2", null ],
        [ "Tabs, spaces and braces", "db/d7b/_dev_man_code_conventions.html#devman1_sec0_3", null ],
        [ "Constants and Enumerators", "db/d7b/_dev_man_code_conventions.html#devman1_sec0_4", null ],
        [ "Comments", "db/d7b/_dev_man_code_conventions.html#devman1_sec0_5", null ]
      ] ],
      [ "Header files", "db/d7b/_dev_man_code_conventions.html#devman1_sec1", [
        [ "General rules", "db/d7b/_dev_man_code_conventions.html#devman1_sec1_1", null ],
        [ "The #ifndef guard", "db/d7b/_dev_man_code_conventions.html#devman1_sec1_2", null ],
        [ "Forward declarations", "db/d7b/_dev_man_code_conventions.html#devman1_sec1_3", null ]
      ] ],
      [ "Namespace hell and typedefinitions", "db/d7b/_dev_man_code_conventions.html#devman1_sec2", null ],
      [ "Other general items", "db/d7b/_dev_man_code_conventions.html#devman1_sec3", [
        [ "Line length", "db/d7b/_dev_man_code_conventions.html#devman1_sec3_0", null ],
        [ "Boolean expressions", "db/d7b/_dev_man_code_conventions.html#devman1_sec3_1", null ],
        [ "Constructor Initializer lists", "db/d7b/_dev_man_code_conventions.html#devman1_sec3_2", null ],
        [ "Operators", "db/d7b/_dev_man_code_conventions.html#devman1_sec3_3", null ],
        [ "Templates", "db/d7b/_dev_man_code_conventions.html#devman1_sec3_4", null ],
        [ "Casting", "db/d7b/_dev_man_code_conventions.html#devman1_sec3_5", null ]
      ] ]
    ] ],
    [ "Global variables", "d6/dfd/_dev_man_global_vars.html", [
      [ "Global variables available", "d6/dfd/_dev_man_global_vars.html#devman2_sec0", [
        [ "Connecting to the physics handler", "d6/dfd/_dev_man_global_vars.html#devman2_sec0_3", null ],
        [ "Connecting to MPI", "d6/dfd/_dev_man_global_vars.html#devman2_sec0_4", null ],
        [ "Connecting to the parallel logging utility", "d6/dfd/_dev_man_global_vars.html#devman2_sec0_5", null ]
      ] ]
    ] ],
    [ "Adding Lua-input to the system", "d1/d86/_dev_man_adding_lua.html", [
      [ "Adding Lua-input", "d1/d86/_dev_man_adding_lua.html#devman03_sec0", null ]
    ] ],
    [ "The structure of meshes", "dd/d1a/_dev_man_meshes.html", [
      [ "General structure of meshes", "dd/d1a/_dev_man_meshes.html#devman4_sec0", [
        [ "What is the grid?", "dd/d1a/_dev_man_meshes.html#devman_meshes_sec0_0", null ],
        [ "Easily access an existing grid", "dd/d1a/_dev_man_meshes.html#devman_meshes_sec0_1", null ]
      ] ],
      [ "More detail on Mesh data structures", "dd/d1a/_dev_man_meshes.html#devman_meshes_sec_1", [
        [ "chi_mesh::MeshHandler", "dd/d1a/_dev_man_meshes.html#devman_meshes_sec1_0", null ],
        [ "chi_mesh::Region", "dd/d1a/_dev_man_meshes.html#devman_meshes_sec1_1", null ],
        [ "chi_mesh::SurfaceMesher and chi_mesh::VolumeMesher", "dd/d1a/_dev_man_meshes.html#devman_meshes_sec1_2", null ],
        [ "chi_mesh::MeshContinuum (or if you like ... THE GRID!)", "dd/d1a/_dev_man_meshes.html#devman_meshes_sec1_3", null ],
        [ "chi_mesh::Cell", "dd/d1a/_dev_man_meshes.html#devman_meshes_sec1_4", null ],
        [ "Accessing cells (the pain of parallel programs)", "dd/d1a/_dev_man_meshes.html#devman_meshes_sec1_5", null ]
      ] ]
    ] ],
    [ "Development Cycle", "dc/d94/_dev_man_dev_cycle.html", [
      [ "Development  Cycle", "dc/d94/_dev_man_dev_cycle.html#devman_sec0", [
        [ "Package update cycle - Primary: August", "dc/d94/_dev_man_dev_cycle.html#devman_sec0_1", null ],
        [ "Development update cycle - Every 2 weeks", "dc/d94/_dev_man_dev_cycle.html#devman_sec0_2", null ],
        [ "Regression tests", "dc/d94/_dev_man_dev_cycle.html#devman_sec0_4", null ],
        [ "Code review criterion", "dc/d94/_dev_man_dev_cycle.html#devman_sec0_5", null ]
      ] ],
      [ "Documentation quality", "dc/d94/_dev_man_dev_cycle.html#devman_sec0_6", [
        [ "Code annotation", "dc/d94/_dev_man_dev_cycle.html#devman_sec0_7", null ],
        [ "Technical documentation", "dc/d94/_dev_man_dev_cycle.html#devman_sec0_8", null ]
      ] ]
    ] ],
    [ "OOP vs Functional Programming", "d2/d60/_dev_man_o_o_pvs_func.html", null ]
];