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
        [ "Connecting to the global data block", "d6/dfd/_dev_man_global_vars.html#devman2_sec0_3", null ],
        [ "Connecting to MPI", "d6/dfd/_dev_man_global_vars.html#devman2_sec0_4", null ],
        [ "Connecting to the parallel logging utility", "d6/dfd/_dev_man_global_vars.html#devman2_sec0_5", null ]
      ] ]
    ] ],
    [ "Adding Lua-input to the system", "d1/d86/_dev_man_adding_lua.html", [
      [ "Adding Lua-input", "d1/d86/_dev_man_adding_lua.html#devman03_sec0", null ]
    ] ],
    [ "Static Registration", "d0/d6f/_dev_man_static_registration.html", [
      [ "1 The general philosophy of Static Registration", "d0/d6f/_dev_man_static_registration.html#DevManParametersSec1", [
        [ "Rigging static initialization for object factories or object makers", "d0/d6f/_dev_man_static_registration.html#DevManParametersSec1_1", null ]
      ] ],
      [ "2 Implementation in ChiTech: ChiObject and ChiObjectFactory", "d0/d6f/_dev_man_static_registration.html#DevManParametersSec2", null ],
      [ "3 The InputParameters system", "d0/d6f/_dev_man_static_registration.html#DevManParametersSec3", [
        [ "FAQ1 Documentation-strings (Doc-strings)", "d0/d6f/_dev_man_static_registration.html#DevManParametersSecFAQ1", null ],
        [ "FAQ2 Optional Parameters", "d0/d6f/_dev_man_static_registration.html#DevManParametersSecFAQ2", null ],
        [ "FAQ3 Inheriting parameters from parent objects", "d0/d6f/_dev_man_static_registration.html#DevManParametersSecFAQ3", null ],
        [ "FAQ4 Changing inherited options to optional/required", "d0/d6f/_dev_man_static_registration.html#DevManParametersSecFAQ4", null ],
        [ "FAQ5 Deprecated parameters", "d0/d6f/_dev_man_static_registration.html#DevManParametersSecFAQ5", null ],
        [ "FAQ6 Constrained ranges", "d0/d6f/_dev_man_static_registration.html#DevManParametersSecFAQ6", null ]
      ] ]
    ] ],
    [ "The Test System", "d7/d2a/_dev_man_test_system.html", [
      [ "1 Compiling the tests", "d7/d2a/_dev_man_test_system.html#DevManTestSystem_sec1", null ],
      [ "2 What is a test?", "d7/d2a/_dev_man_test_system.html#DevManTestSystem_sec2", [
        [ "2.1 Test-blocks documentation", "d7/d2a/_dev_man_test_system.html#DevManTestSystem_sec2_1", null ],
        [ "2.2 Checks documentation", "d7/d2a/_dev_man_test_system.html#DevManTestSystem_sec2_2", [
          [ "2.2.1 KeyValuePairCheck", "d7/d2a/_dev_man_test_system.html#DevManTestSystem_sec2_2_1", null ],
          [ "2.2.2 StrCompareCheck", "d7/d2a/_dev_man_test_system.html#DevManTestSystem_sec2_2_2", null ],
          [ "2.2.3 FloatCompareCheck", "d7/d2a/_dev_man_test_system.html#DevManTestSystem_sec2_2_3", null ],
          [ "2.2.4 IntCompareCheck", "d7/d2a/_dev_man_test_system.html#DevManTestSystem_sec2_2_4", null ],
          [ "2.2.5 ErrorCodeCheck", "d7/d2a/_dev_man_test_system.html#DevManTestSystem_sec2_2_5", null ],
          [ "2.2.6 GoldFileCheck", "d7/d2a/_dev_man_test_system.html#DevManTestSystem_sec2_2_6", null ]
        ] ]
      ] ],
      [ "3 Running the test system", "d7/d2a/_dev_man_test_system.html#DevManTestSystem_sec3", null ]
    ] ],
    [ "Coding Tutorial 1 - Poisson's problem with Finite Volume", "dc/da4/_code_tut1.html", [
      [ "1 Poisson's equation", "dc/da4/_code_tut1.html#CodeTut1Sec1", [
        [ "1.1 Our specific problem", "dc/da4/_code_tut1.html#CodeTut1Sec1_1", null ],
        [ "1.2 The Finite Volume spatial discretization", "dc/da4/_code_tut1.html#CodeTut1Sec1_2", null ]
      ] ],
      [ "2 Setting up the problem", "dc/da4/_code_tut1.html#CodeTut1Sec2", null ],
      [ "3 Getting the grid", "dc/da4/_code_tut1.html#CodeTut1Sec3", null ],
      [ "4 Initializing the Finite Volume Spatial Discretization", "dc/da4/_code_tut1.html#CodeTut1Sec4", null ],
      [ "5 Creating and Initializing PETSc matrices and vectors", "dc/da4/_code_tut1.html#CodeTut1Sec5", null ],
      [ "6 Assembling the matrix and right-hand-side", "dc/da4/_code_tut1.html#CodeTut1Sec6", null ],
      [ "7 Solving the system with a Krylov Subspace solver", "dc/da4/_code_tut1.html#CodeTut1Sec7", null ],
      [ "8 Visualizing the solution", "dc/da4/_code_tut1.html#CodeTut1Sec8", null ],
      [ "The complete program", "dc/da4/_code_tut1.html#CodeTut1Sec9", null ]
    ] ],
    [ "Coding Tutorial 2 - Using ghosted vectors", "dd/d89/_code_tut2.html", [
      [ "1 Ghost cell's in ChiTech", "dd/d89/_code_tut2.html#CodeTut2Sec1", null ],
      [ "2 Computing the gradient of a Finite Volume Scalar", "dd/d89/_code_tut2.html#CodeTut2Sec2", null ],
      [ "3 Making a ghosted vector and communicating ghosted data", "dd/d89/_code_tut2.html#CodeTut2Sec3", null ],
      [ "4 Accessing ghosted data", "dd/d89/_code_tut2.html#CodeTut2Sec4", null ],
      [ "5 Visualizing the gradient", "dd/d89/_code_tut2.html#CodeTut2Sec5", null ],
      [ "The complete program", "dd/d89/_code_tut2.html#CodeTut2Sec6", null ]
    ] ],
    [ "Coding Tutorial 3 - Poisson's problem with PWLC", "d1/d74/_code_tut3.html", [
      [ "1 Poisson's equation", "d1/d74/_code_tut3.html#CodeTut3Sec1", [
        [ "1.1 Our specific problem", "d1/d74/_code_tut3.html#CodeTut3Sec1_1", null ],
        [ "1.2 The Weak-form of Poisson's equation", "d1/d74/_code_tut3.html#CodeTut3Sec1_2", null ],
        [ "1.3 The discretized equation with the Continuous Galerkin approach", "d1/d74/_code_tut3.html#CodeTut3Sec1_3", null ]
      ] ],
      [ "2 Setting up the problem", "d1/d74/_code_tut3.html#CodeTut3Sec2", null ],
      [ "3 Initializing the PWLC Spatial Discretization", "d1/d74/_code_tut3.html#CodeTut3Sec3", null ],
      [ "4 Using quadrature data to assemble the system", "d1/d74/_code_tut3.html#CodeTut3Sec4", null ],
      [ "5 Compensating for Dirichlet boundaries", "d1/d74/_code_tut3.html#CodeTut3Sec5", null ],
      [ "6 Solving and visualizing", "d1/d74/_code_tut3.html#CodeTut3Sec6", null ],
      [ "The complete program", "d1/d74/_code_tut3.html#CodeTut3Sec7", null ]
    ] ],
    [ "Coding Tutorial 4 - MMS for Poisson's problem with PWLC", "d7/d9e/_code_tut4.html", [
      [ "1 Defining a wrapper to call a lua function", "d7/d9e/_code_tut4.html#CodeTut4Sec1", null ],
      [ "2 Lua functions", "d7/d9e/_code_tut4.html#CodeTut4Sec2", null ],
      [ "3 Getting guadrature-point real world XYZ", "d7/d9e/_code_tut4.html#CodeTut4Sec3", null ],
      [ "4 Convergence study", "d7/d9e/_code_tut4.html#CodeTut4Sec4", null ],
      [ "The complete program", "d7/d9e/_code_tut4.html#CodeTut4SecX", null ]
    ] ],
    [ "Coding Tutorial 6 - Transport using WDD", "d4/dec/_code_tut6.html", [
      [ "1 The multigroup Discrete Ordinates Equations", "d4/dec/_code_tut6.html#CodeTut6Sec1", null ],
      [ "2 The Diamond Difference Spatial Discretization", "d4/dec/_code_tut6.html#CodeTut6Sec2", [
        [ "2.1 The right hand side", "d4/dec/_code_tut6.html#CodeTut6Sec2_1", null ],
        [ "2.2 The left hand side", "d4/dec/_code_tut6.html#CodeTut6Sec2_2", null ]
      ] ],
      [ "3 Getting the grid with additional preoperties", "d4/dec/_code_tut6.html#CodeTut6Sec3", null ],
      [ "4 Creating an angular quadrature", "d4/dec/_code_tut6.html#CodeTut6Sec4", null ],
      [ "5 Auxialiary items", "d4/dec/_code_tut6.html#CodeTut6Sec5", null ],
      [ "6 Defining a cell-by-cell sweep chunk", "d4/dec/_code_tut6.html#CodeTut6Sec6", null ],
      [ "7 Defining a sweep over all directions", "d4/dec/_code_tut6.html#CodeTut6Sec7", null ],
      [ "8 The Classic Richardson iterative scheme", "d4/dec/_code_tut6.html#CodeTut6Sec8", null ],
      [ "9 Exporting only the scalar flux", "d4/dec/_code_tut6.html#CodeTut6Sec9", null ],
      [ "The complete program", "d4/dec/_code_tut6.html#CodeTut6SecX", null ]
    ] ],
    [ "Coding Tutorial 91a - Discrete Ordinates with PWLD", "dc/dd8/_code_tut91a.html", [
      [ "The complete program", "dc/dd8/_code_tut91a.html#CodeTut91aSecX", null ]
    ] ],
    [ "Coding Tutorial 93 - Ray-tracing for uncollided flux using random rays.", "d4/d4d/_code_tut93.html", [
      [ "1 Introduction", "d4/d4d/_code_tut93.html#CodeTut93Sec1", [
        [ "1.1 Weighting with a spherical harmonic", "d4/d4d/_code_tut93.html#CodeTut93Sec1_1", null ],
        [ "1.2 Weighting by average FE shape function values", "d4/d4d/_code_tut93.html#CodeTut93Sec1_2", null ],
        [ "1.3 Weighting with an exponential attenuation", "d4/d4d/_code_tut93.html#CodeTut93Sec1_3", null ]
      ] ],
      [ "2 Program setup", "d4/d4d/_code_tut93.html#CodeTut93Sec2", null ],
      [ "3 The particle/ray data structure", "d4/d4d/_code_tut93.html#CodeTut93Sec3", null ],
      [ "4 Utility lambdas", "d4/d4d/_code_tut93.html#CodeTut93Sec4", [
        [ "4.1 Sampling a random direction", "d4/d4d/_code_tut93.html#CodeTut93Sec4_1", null ],
        [ "4.2 PWLD Tally contribution", "d4/d4d/_code_tut93.html#CodeTut93Sec4_2", null ],
        [ "4.3 Approximating cell size", "d4/d4d/_code_tut93.html#CodeTut93Sec4_3", null ]
      ] ],
      [ "5 The raytracer", "d4/d4d/_code_tut93.html#CodeTut93Sec5", null ],
      [ "6 Executing the algorithms", "d4/d4d/_code_tut93.html#CodeTut93Sec6", null ],
      [ "7 Post-processing the tallies", "d4/d4d/_code_tut93.html#CodeTut93Sec7", null ],
      [ "8 Exporting field functions", "d4/d4d/_code_tut93.html#CodeTut93Sec8", null ],
      [ "The complete program", "d4/d4d/_code_tut93.html#CodeTut93Sec9", null ]
    ] ],
    [ "The structure of meshes", "dd/d1a/_dev_man_meshes.html", [
      [ "General structure of meshes", "dd/d1a/_dev_man_meshes.html#devman4_sec0", [
        [ "What is the grid?", "dd/d1a/_dev_man_meshes.html#devman_meshes_sec0_0", null ],
        [ "Easily access an existing grid", "dd/d1a/_dev_man_meshes.html#devman_meshes_sec0_1", null ]
      ] ],
      [ "More detail on Mesh data structures", "dd/d1a/_dev_man_meshes.html#devman_meshes_sec_1", [
        [ "chi_mesh::MeshHandler", "dd/d1a/_dev_man_meshes.html#devman_meshes_sec1_0", null ],
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
    [ "OOP vs Functional Programming", "d2/d60/_dev_man_o_o_pvs_func.html", null ],
    [ "The chi_math::UnknownManager", "d1/dc5/_dev_man_u_k_man.html", [
      [ "Introduction", "d1/dc5/_dev_man_u_k_man.html#devmanA3_sec0", null ],
      [ "1 Cells vs Vertices vs Nodes vs Degree-of-Freedom (DOF)", "d1/dc5/_dev_man_u_k_man.html#devmanA3_sec1", null ],
      [ "2 One DOF per node", "d1/dc5/_dev_man_u_k_man.html#devmanA3_sec2", null ],
      [ "3 Multiple DOFs Nodal ordering", "d1/dc5/_dev_man_u_k_man.html#devmanA3_sec3", null ],
      [ "4 Multiple DOFs Block ordering", "d1/dc5/_dev_man_u_k_man.html#devmanA3_sec4", null ]
    ] ]
];