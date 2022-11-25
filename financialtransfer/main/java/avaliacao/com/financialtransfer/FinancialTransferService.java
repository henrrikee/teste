package avaliacao.com.financialtransfer;

import avaliacao.com.entity.FinancialTransfer;

import java.util.List;

public interface FinancialTransferService {

    FinancialTransfer save(FinancialTransfer financialTransfer);

    List<FinancialTransfer> findAll();

}

