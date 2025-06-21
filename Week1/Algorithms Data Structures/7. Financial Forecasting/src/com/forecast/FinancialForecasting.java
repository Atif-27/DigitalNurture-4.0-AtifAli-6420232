package com.forecast;


public class FinancialForecasting {

    // Calculates future value using recursion
    public static double computeProjection(double initialAmount, double rate, int years) {
        if (years == 0) {
            return initialAmount;
        }
        return computeProjection(initialAmount * (1 + rate), rate, years - 1);
    }

    // Estimates future values based on historical growth
    public static double[] estimateUpcomingValues(double[] historicalData, int periodsAhead) {
        if (historicalData.length < 2) {
            throw new IllegalArgumentException("At least two historical data points are required.");
        }

        // Calculate average growth rate
        double sumGrowth = 0;
        for (int i = 1; i < historicalData.length; i++) {
            double growth = (historicalData[i] - historicalData[i - 1]) / historicalData[i - 1];
            sumGrowth += growth;
        }
        double meanGrowth = sumGrowth / (historicalData.length - 1);

        // Predict future values
        double[] projections = new double[periodsAhead];
        double latestValue = historicalData[historicalData.length - 1];

        for (int i = 0; i < periodsAhead; i++) {
            latestValue = computeProjection(latestValue, meanGrowth, 1);
            projections[i] = latestValue;
        }

        return projections;
    }
}
