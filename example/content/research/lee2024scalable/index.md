---
title: "Scalable and optimal Bayesian inference for sparse covariance matrices via screened beta-mixture prior."
tags: ["preprint"]
# date: 2023-02-23
# venue: IEEE Transactions on Semiconductor Manufacturing
path: "research/lee2024scalable"
excerpt: We propose a scalable Bayesian method for sparse covariance matrix estimation by incorporating a continuous shrinkage prior with a screening procedure.
selected: true
links:
  - name: "arxiv.org"
    url: "https://arxiv.org/abs/2206.12773"
priority: 96
cover: "./preview.png"
---

In this paper, we propose a scalable Bayesian method for sparse covariance matrix estimation by incorporating a continuous shrinkage prior with a screening procedure. In the first step of the procedure, the off-diagonal elements with small correlations are screened based on their sample correlations. In the second step, the posterior of the covariance with the screened elements fixed at 0 is computed with the beta-mixture prior. The screened elements of the covariance significantly increase the efficiency of the posterior computation. The simulation studies and real data applications show that the proposed method can be used for the high-dimensional problem with the "large $p$, small $n$". In some examples in this paper, the proposed method can be computed in a reasonable amount of time, while no other existing Bayesian methods can be. The proposed method has also sound theoretical properties. The screening procedure has the sure screening property and the selection consistency, and the posterior has the optimal minimax or nearly minimax convergence rate under the Frobeninus norm.

## Publication

K. Lee, S. Jo, **K. Lee**, and J. Lee (2024+). Scalable and optimal Bayesian inference for sparse covariance matrices via screened beta-mixture prior.