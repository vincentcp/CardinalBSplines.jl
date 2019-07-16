var documenterSearchIndex = {"docs":
[{"location":"#CardinalBSplines.jl-Documentation-1","page":"Home","title":"CardinalBSplines.jl Documentation","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"A Julia package for B-splines operations","category":"page"},{"location":"#","page":"Home","title":"Home","text":"For installation instructions, see Installation.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"For a  full description of the functionality use the manual:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Pages = [\"man/evaluation.md\",\"man/integration.md\",\"man/filters.md\"]","category":"page"},{"location":"#Installation-1","page":"Home","title":"Installation","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"CardinalBSplines.jl is not added to the Julia General registry and depends on a unregistered package InfiniteVectors.jl.","category":"page"},{"location":"#Recomanded-1","page":"Home","title":"Recomanded","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"For Julia 1.1 or higher, you can add the FrameFun registry and than add CardinalBSplines. From the Julia REPL, type ] to enter Pkg mode and run","category":"page"},{"location":"#","page":"Home","title":"Home","text":"pkg> add https://github.com/FrameFunVC/FrameFunRegistry\npkg> add CardinalBSplines","category":"page"},{"location":"#Legacy-1","page":"Home","title":"Legacy","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"In Julia 1.0, the packages can be installed by cloning their git repository. From the Julia REPL, type ] to enter Pkg mode and run","category":"page"},{"location":"#","page":"Home","title":"Home","text":"pkg> add https://github.com/FrameFunVC/InfiniteVectors.jl\npkg> add https://github.com/FrameFunVC/CardinalBSplines.jl","category":"page"},{"location":"#","page":"Home","title":"Home","text":"or in a file you could use","category":"page"},{"location":"#","page":"Home","title":"Home","text":"using Pkg\npkg\"add https://github.com/FrameFunVC/InfiniteVectors.jl\"\npkg\"add https://github.com/FrameFunVC/CardinalBSplines.jl\"","category":"page"},{"location":"man/evaluation/#","page":"B-spline evaluation","title":"B-spline evaluation","text":"using Plots, CardinalBSplines","category":"page"},{"location":"man/evaluation/#B-spline-evaluation-1","page":"B-spline evaluation","title":"B-spline evaluation","text":"","category":"section"},{"location":"man/evaluation/#","page":"B-spline evaluation","title":"B-spline evaluation","text":"Spline evalution can be done in two ways. The first one uses the spline constructors in B-spline constructors.","category":"page"},{"location":"man/evaluation/#","page":"B-spline evaluation","title":"B-spline evaluation","text":"f = BSpline(3)\nx = LinRange(-1,5,10)\nf.(x)","category":"page"},{"location":"man/evaluation/#","page":"B-spline evaluation","title":"B-spline evaluation","text":"The second one is uses the internal function in Internal evaluation functions.","category":"page"},{"location":"man/evaluation/#","page":"B-spline evaluation","title":"B-spline evaluation","text":"CardinalBSplines.evaluate_BSpline.(Val{3}(), x, Float64)","category":"page"},{"location":"man/evaluation/#","page":"B-spline evaluation","title":"B-spline evaluation","text":"DocTestFilters = r\"[0-9\\.]+ seconds \\(.*\\)\"","category":"page"},{"location":"man/evaluation/#","page":"B-spline evaluation","title":"B-spline evaluation","text":"No allocation happens during evaluation","category":"page"},{"location":"man/evaluation/#","page":"B-spline evaluation","title":"B-spline evaluation","text":"x = LinRange(-1,5,10000);\ns = Array{Float64}(undef, 10000);\ns .= f.(x);\n@time s .= f.(x);\n  0.000165 seconds (5 allocations: 208 bytes)","category":"page"},{"location":"man/evaluation/#","page":"B-spline evaluation","title":"B-spline evaluation","text":"DocTestFilters = nothing","category":"page"},{"location":"man/evaluation/#Examples-1","page":"B-spline evaluation","title":"Examples","text":"","category":"section"},{"location":"man/evaluation/#B-splines-1","page":"B-spline evaluation","title":"B-splines","text":"","category":"section"},{"location":"man/evaluation/#","page":"B-spline evaluation","title":"B-spline evaluation","text":"x = LinRange(-1,11,500) # hide\nplot(legend=false)\n[plot!(x,BSpline(degree).(x)) for degree in 0:10]\nPlots.savefig(\"bspline-plot.svg\"); nothing # hide","category":"page"},{"location":"man/evaluation/#","page":"B-spline evaluation","title":"B-spline evaluation","text":"(Image: )","category":"page"},{"location":"man/evaluation/#Centered-B-splines-1","page":"B-spline evaluation","title":"Centered B-splines","text":"","category":"section"},{"location":"man/evaluation/#","page":"B-spline evaluation","title":"B-spline evaluation","text":"x = LinRange(-6,6,500) # hide\nplot(legend=false)\n[plot!(x,CenteredBSpline(degree).(x)) for degree in 0:10]\nPlots.savefig(\"cbspline-plot.svg\"); nothing # hide","category":"page"},{"location":"man/evaluation/#","page":"B-spline evaluation","title":"B-spline evaluation","text":"(Image: )","category":"page"},{"location":"man/evaluation/#Periodic-B-splines-1","page":"B-spline evaluation","title":"Periodic B-splines","text":"","category":"section"},{"location":"man/evaluation/#","page":"B-spline evaluation","title":"B-spline evaluation","text":"x = LinRange(-1,11,500) # hide\nplot(legend=false)\n[plot!(x,PeriodicBSpline(degree, 3).(x)) for degree in 0:10]\nPlots.savefig(\"pbspline-plot.svg\"); nothing # hide","category":"page"},{"location":"man/evaluation/#","page":"B-spline evaluation","title":"B-spline evaluation","text":"(Image: )","category":"page"},{"location":"man/evaluation/#Derivatives-of-B-Splines-1","page":"B-spline evaluation","title":"Derivatives of B-Splines","text":"","category":"section"},{"location":"man/evaluation/#","page":"B-spline evaluation","title":"B-spline evaluation","text":"x = LinRange(-1,11,500) # hide\nplot(legend=false)\n[plot!(x,BSplineDiff(4,diff).(x)) for diff in 0:4]\nPlots.savefig(\"dbspline-plot.svg\"); nothing # hide","category":"page"},{"location":"man/evaluation/#","page":"B-spline evaluation","title":"B-spline evaluation","text":"(Image: )","category":"page"},{"location":"man/evaluation/#B-spline-constructors-1","page":"B-spline evaluation","title":"B-spline constructors","text":"","category":"section"},{"location":"man/evaluation/#","page":"B-spline evaluation","title":"B-spline evaluation","text":"Modules = [CardinalBSplines]\nPages   = [\"splinetypes.jl\"]","category":"page"},{"location":"man/evaluation/#CardinalBSplines.BSpline-Tuple{Any,Any}","page":"B-spline evaluation","title":"CardinalBSplines.BSpline","text":"BSpline(m, T=Float64)\n\nConstruct a B-spline of order m and type T\n\nThe support of the B-spline is [0,m+1].\n\n\n\n\n\n","category":"method"},{"location":"man/evaluation/#CardinalBSplines.BSplineDiff-Tuple{Any,Any,Any}","page":"B-spline evaluation","title":"CardinalBSplines.BSplineDiff","text":"BSplineDiff(m, d, S=Float64)\n\nConstruct the dth derivative of a B-spline of order m and type S\n\nSee also BSpline\n\n\n\n\n\n","category":"method"},{"location":"man/evaluation/#CardinalBSplines.CenteredBSpline-Tuple{Any,Any}","page":"B-spline evaluation","title":"CardinalBSplines.CenteredBSpline","text":"CenteredBSpline(m, T=Float64)\n\nConstruct a centered B-spline of order m and type T\n\nThe support of the centered B-spline is s left-tfracm+12tfracm+12right.\n\n\n\n\n\n","category":"method"},{"location":"man/evaluation/#CardinalBSplines.CenteredBSplineDiff-Tuple{Any,Any,Any}","page":"B-spline evaluation","title":"CardinalBSplines.CenteredBSplineDiff","text":"CenteredBSplineDiff(m, d, S=Float64)\n\nConstruct the dth derivative of a centered B-spline of order m and type S.\n\nSee also CenteredBSpline\n\n\n\n\n\n","category":"method"},{"location":"man/evaluation/#CardinalBSplines.PeriodicBSpline-Tuple{Any,Any,Any}","page":"B-spline evaluation","title":"CardinalBSplines.PeriodicBSpline","text":"PeriodicBSpline(m, p=1, S=Float64)\n\nConstruct a periodic B-spline of order m, period p, and type S\n\nSee also BSpline\n\n\n\n\n\n","category":"method"},{"location":"man/evaluation/#CardinalBSplines.PeriodicBSplineDiff-NTuple{4,Any}","page":"B-spline evaluation","title":"CardinalBSplines.PeriodicBSplineDiff","text":"PeriodicBSplineDiff(m, p, d, S=Float64)\n\nConstruct the dth derivative of a periodic B-spline of order m , period p and type S\n\nSee also PeriodicBSpline\n\n\n\n\n\n","category":"method"},{"location":"man/evaluation/#CardinalBSplines.PeriodicCenteredBSpline-Tuple{Any,Any,Any}","page":"B-spline evaluation","title":"CardinalBSplines.PeriodicCenteredBSpline","text":"PeriodicCenteredBSpline(m, p=1, S=Float64)\n\nConstruct a periodic centered B-spline of order m and type S.\n\nSee also CenteredBSpline\n\n\n\n\n\n","category":"method"},{"location":"man/evaluation/#CardinalBSplines.PeriodicCenteredBSplineDiff-NTuple{4,Any}","page":"B-spline evaluation","title":"CardinalBSplines.PeriodicCenteredBSplineDiff","text":"PeriodicCenteredBSplineDiff(m, p, d, S=Float64)\n\nConstruct the dth derivative of a periodic, centered B-spline of order m, period p, and type S.\n\nSee also PeriodicCenteredBSpline\n\n\n\n\n\n","category":"method"},{"location":"man/evaluation/#Internal-evaluation-functions-1","page":"B-spline evaluation","title":"Internal evaluation functions","text":"","category":"section"},{"location":"man/evaluation/#","page":"B-spline evaluation","title":"B-spline evaluation","text":"Modules = [CardinalBSplines]\nPages   = [\"splineevaluation.jl\"]","category":"page"},{"location":"man/evaluation/#CardinalBSplines.evaluate_BSpline-Union{Tuple{T}, Tuple{N}, Tuple{Val{N},Real,Type{T}}} where T<:Real where N","page":"B-spline evaluation","title":"CardinalBSplines.evaluate_BSpline","text":"evaluate_BSpline(::Val{N}, x, ::Type{T})\n\nEvaluate the periodic centered B-spline of order N, and type T in x.\n\n\n\n\n\n","category":"method"},{"location":"man/evaluation/#CardinalBSplines.evaluate_BSpline_derivative-Union{Tuple{T}, Tuple{N}, Tuple{Val{N},Val{0},Real,Type{T}}} where T<:Real where N","page":"B-spline evaluation","title":"CardinalBSplines.evaluate_BSpline_derivative","text":"evaluate_BSpline_derivative(::Val{N}, ::Var{D}, x, ::Type{T})\n\nEvaluate the Dth derivative of the B-spline of order N, and type T in x.\n\n\n\n\n\n","category":"method"},{"location":"man/evaluation/#CardinalBSplines.evaluate_centered_BSpline-Union{Tuple{N}, Tuple{T}, Tuple{Val{N},Real,Type{T}}} where N where T<:Real","page":"B-spline evaluation","title":"CardinalBSplines.evaluate_centered_BSpline","text":"evaluate_centered_BSpline(::Val{N}, x, period, ::Type{T})\n\nEvaluate the centered B-spline of order N and type T in x.\n\n\n\n\n\n","category":"method"},{"location":"man/evaluation/#CardinalBSplines.evaluate_centered_BSpline_derivative-Union{Tuple{T}, Tuple{K}, Tuple{N}, Tuple{Val{N},Val{K},Real,Type{T}}} where T<:Real where K where N","page":"B-spline evaluation","title":"CardinalBSplines.evaluate_centered_BSpline_derivative","text":"evaluate_centered_BSpline_derivative(::Val{N}, ::Var{D}, x, ::Type{T})\n\nEvaluate the Dth derivative of the centered B-spline of order N, type T and period p in x.\n\n\n\n\n\n","category":"method"},{"location":"man/evaluation/#CardinalBSplines.evaluate_periodic_BSpline-Union{Tuple{T}, Tuple{N}, Tuple{Val{N},Real,Real,Type{T}}} where T<:Real where N","page":"B-spline evaluation","title":"CardinalBSplines.evaluate_periodic_BSpline","text":"evaluate_periodic_BSpline(::Val{N}, x, period, ::Type{T})\n\nEvaluate the periodic B-spline of order N, type T and period p in x.\n\n\n\n\n\n","category":"method"},{"location":"man/evaluation/#CardinalBSplines.evaluate_periodic_BSpline_derivative-Union{Tuple{T}, Tuple{K}, Tuple{N}, Tuple{Val{N},Val{K},Real,Real,Type{T}}} where T<:Real where K where N","page":"B-spline evaluation","title":"CardinalBSplines.evaluate_periodic_BSpline_derivative","text":"evaluate_periodic_BSpline_derivative(::Val{N}, ::Var{D}, x, period, ::Type{T})\n\nEvaluate the Dth derivative of the periodic B-spline of order N, type T and period p in x.\n\n\n\n\n\n","category":"method"},{"location":"man/evaluation/#CardinalBSplines.evaluate_periodic_centered_BSpline-Union{Tuple{N}, Tuple{T}, Tuple{Val{N},Real,Real,Type{T}}} where N where T<:Real","page":"B-spline evaluation","title":"CardinalBSplines.evaluate_periodic_centered_BSpline","text":"evaluate_periodic_centered_BSpline(::Val{N}, x, period, ::Type{T})\n\nEvaluate the periodic centered B-spline of order N, type T and period p in x.\n\n\n\n\n\n","category":"method"},{"location":"man/evaluation/#CardinalBSplines.evaluate_periodic_centered_BSpline_derivative-Union{Tuple{T}, Tuple{K}, Tuple{N}, Tuple{Val{N},Val{K},Real,Real,Type{T}}} where T<:Real where K where N","page":"B-spline evaluation","title":"CardinalBSplines.evaluate_periodic_centered_BSpline_derivative","text":"evaluate_periodic_centered_BSpline_derivative(::Val{N}, ::Var{D}, x, period, ::Type{T})\n\nEvaluate the Dth derivative of the periodic centered B-spline of order N, type T and period p in x.\n\n\n\n\n\n","category":"method"},{"location":"man/integration/#Integration-1","page":"Integration","title":"Integration","text":"","category":"section"},{"location":"man/integration/#","page":"Integration","title":"Integration","text":"squared_spline_integral\nshifted_spline_integral","category":"page"},{"location":"man/integration/#CardinalBSplines.squared_spline_integral","page":"Integration","title":"CardinalBSplines.squared_spline_integral","text":"squared_spline_integral(N)\n\nCalculate ∫B_N(x)^2 dx, with B_N the B-spline of degree N\n\n\n\n\n\n","category":"function"},{"location":"man/integration/#CardinalBSplines.shifted_spline_integral","page":"Integration","title":"CardinalBSplines.shifted_spline_integral","text":"shifted_spline_integral(m, t)\n\nCalculate ∫ B_m(x) B_m(x-t) dx, with B_m the B-spline of degree m\n\n\n\n\n\n","category":"function"},{"location":"man/filters/#Filters-1","page":"Filters","title":"Filters","text":"","category":"section"},{"location":"man/filters/#","page":"Filters","title":"Filters","text":"The packages supports discrete B-splines as defined by","category":"page"},{"location":"man/filters/#","page":"Filters","title":"Filters","text":"B-Spline Signal Processing: Part I`Unser et al., IEEE TRANSACTIONS ON SIGNAL PROCESSING, VOL. 41, NO. 2","category":"page"},{"location":"man/filters/#","page":"Filters","title":"Filters","text":"b^n_m(k) = beta^n(km)","category":"page"},{"location":"man/filters/#","page":"Filters","title":"Filters","text":"In the figure below we show two examples of such discrete B-splines, namely, b^1_3 and b^3_2","category":"page"},{"location":"man/filters/#","page":"Filters","title":"Filters","text":"[.pdf], [generated .tex], [generated .tikz]","category":"page"},{"location":"man/filters/#","page":"Filters","title":"Filters","text":"(Image: )","category":"page"},{"location":"man/filters/#","page":"Filters","title":"Filters","text":"For oversampled discrete B-splines (m1) there exists compact duals, i.e., signals, g, such that","category":"page"},{"location":"man/filters/#","page":"Filters","title":"Filters","text":"langle delta_lm * b^n_m delta_km * grangle=delta_l-kquad forall lkin mathbb Z","category":"page"},{"location":"man/filters/#","page":"Filters","title":"Filters","text":"Their support is restricted to k=-RdotsR. Below you see some compact dual signals for the discrete B-splines above.","category":"page"},{"location":"man/filters/#","page":"Filters","title":"Filters","text":"[.pdf], [generated .tex], [generated .tikz]","category":"page"},{"location":"man/filters/#","page":"Filters","title":"Filters","text":"(Image: )","category":"page"},{"location":"man/filters/#","page":"Filters","title":"Filters","text":"Modules = [CardinalBSplines]\nPages   = [\"filters.jl\"]","category":"page"},{"location":"man/filters/#CardinalBSplines.bn-Union{Tuple{Int64}, Tuple{T}, Tuple{Int64,Type{T}}} where T","page":"Filters","title":"CardinalBSplines.bn","text":"bn(n::Int, ::Type{T}=Float64)\n\nDiscrete B-spline signal of degree n and period mN.\n\nImplements the signals of B-Spline Signal Processing: Part I\nUnser et al., IEEE TRANSACTIONS ON SIGNAL PROCESSING, VOL. 41, NO. 2\n\n\n\n\n\n","category":"method"},{"location":"man/filters/#CardinalBSplines.bnm-Union{Tuple{Int64,Int64}, Tuple{T}, Tuple{Int64,Int64,Type{T}}} where T","page":"Filters","title":"CardinalBSplines.bnm","text":"bnm(n::Int, m::Int, [N::Int, ]::Type{T}=Float64)\n\nDiscrete B-spline signal of degree n and oversampling m. If 'N' is specified the signal is periodic with period Nm.\n\nImplements the signals of B-Spline Signal Processing: Part I\nUnser et al., IEEE TRANSACTIONS ON SIGNAL PROCESSING, VOL. 41, NO. 2\n\n\n\n\n\n","category":"method"},{"location":"man/filters/#CardinalBSplines.bsplinesignal-Union{Tuple{Int64}, Tuple{T}, Tuple{Int64,Type{T}}} where T","page":"Filters","title":"CardinalBSplines.bsplinesignal","text":"bsplinesignal(n::Int, [, m::Int] ::Type{T}=Float64)\n\nDiscrete B-spline signal of degree n and oversampling m.\n\nImplements the signals of B-Spline Signal Processing: Part I\nUnser et al., IEEE TRANSACTIONS ON SIGNAL PROCESSING, VOL. 41, NO. 2\n\n\n\n\n\n","category":"method"},{"location":"man/filters/#CardinalBSplines.b̃nm-Union{Tuple{Int64,Int64,Int64}, Tuple{T}, Tuple{Int64,Int64,Int64,Type{T}}} where T","page":"Filters","title":"CardinalBSplines.b̃nm","text":"b̃nm(n::Int, m::Int, N::Int, ::Type{T}=Float64)\n\nLeast squares dual of bnm:\n\n$b̃nm(k)= \\left[\\left([bnm*bnm]_{↓m}\\right)^{-1}\\right]_{↑m}*bnm(k)$.\n\n\n\n\n\n","category":"method"},{"location":"man/filters/#CardinalBSplines.periodicbsplinesignal-Union{Tuple{Int64,Int64,Int64}, Tuple{T}, Tuple{Int64,Int64,Int64,Type{T}}} where T","page":"Filters","title":"CardinalBSplines.periodicbsplinesignal","text":"periodicbsplinesignal(n::Int, m::Int, N::Int, ::Type{T}=Float64)\n\nDiscrete B-spline signal of degree n, oversampling m and period mN.\n\nSee also bsplinesignal\n\n\n\n\n\n","category":"method"},{"location":"man/filters/#CardinalBSplines.snm-Union{Tuple{Int64,Int64,Int64}, Tuple{T}, Tuple{Int64,Int64,Int64,Type{T}}} where T","page":"Filters","title":"CardinalBSplines.snm","text":"snm(n::Int, m::Int, N::Int, ::Type{T}=Float64)\n\nThe coefficients of b̃nm in bnm, i.e.,\n\n$\\tilde bnm(k) = [snm]_{\\uparrow m}*bnm(k)$\n\n\n\n\n\n","category":"method"}]
}
