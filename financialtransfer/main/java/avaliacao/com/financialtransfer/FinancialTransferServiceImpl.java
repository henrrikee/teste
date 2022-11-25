package avaliacao.com.financialtransfer;

import avaliacao.com.entity.FinancialTransfer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FinancialTransferServiceImpl extends FinancialTransfer implements FinancialTransferService {

    @Autowired
    FinancialTransferRepository financialTransferRepository;

    @Override
    public FinancialTransfer save(FinancialTransfer financialTransfer) {
        return financialTransferRepository.save(financialTransfer);

    }

    @Override
    public List<FinancialTransfer> findAll() {
        return financialTransferRepository.findAll();
    }

}
